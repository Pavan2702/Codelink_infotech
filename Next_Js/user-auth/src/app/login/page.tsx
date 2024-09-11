"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { ErrorMessage, Field, Form, Formik } from "formik"

const formData = [
    {
        name: 'email',
        type: 'text',
        placeholder: 'Email Id',
    },
    {
        name: 'password',
        type: 'text',
        placeholder: 'Password',
    },
];

interface InitialValues {
    email: string;
    password: string;
}
export default function LoginPage(){
    return(
        <Formik
        initialValues={{
            email: "",
            password: "",
        }}
        onSubmit={async (values) => {
            console.log(values)
        }}
    >
        {({ errors, touched, values }) => (
            <Form>
                <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50`}>
                    <div className="relative p-8 bg-transparent backdrop-brightness-50 w-96 rounded-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Add User</h2>
                        {formData.map((item, index) => (
                            <div className="flex items-center justify-center py-5" key={index}>
                                <div className="relative">
                                    <Field
                                        id={item.placeholder}
                                        name={item.name}
                                        type={item.type}
                                        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-gray-500 transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    <label
                                        htmlFor={item.placeholder}
                                        className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:-top-4 peer-focus:text-gray-500 
                                            ${touched[item.name as keyof InitialValues] && errors[item.name as keyof InitialValues] ? 'text-red-500' : ''}
                                            ${values[item.name as keyof InitialValues] ? '-top-[16px] text-xs text-gray-500' : ''}`}
                                    >
                                        {item.placeholder}
                                    </label>
                                    {touched[item.name as keyof InitialValues] && errors[item.name as keyof InitialValues] && (
                                        <div className="text-red-500 text-sm mt-1">
                                            <ErrorMessage name={item.name} component="div" className="text-red-500" />
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="mr-2 px-4 py-2 border-2 text-white rounded hover:bg-blue-600"
                            >
                                Log in
                            </button>
                            <button
                                type="button"
                                // onClick={cancelButton}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                        <div className="flex justify-center pt-4">
                            <Link href='/signup'>Sign up here</Link>
                        </div>
                    </div>
                </div>
            </Form>
        )}
    </Formik >
    )
}