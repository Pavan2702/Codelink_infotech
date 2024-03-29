import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import validation from "../Yup/Validation";

const initialValues = {
    firstName: "",
    lastName: "",
    contactNo: "",
    emailId: "",
    gender: "",
    address: "",
    city: "",
    docs: [],
    password: "",
    conformPass: "",
};

const formData = [
    {
        name: 'firstName',
        type: 'text',
        placeholder: "First Name",
    },
    {
        name: 'lastName',
        type: 'text',
        placeholder: "Last Name",
    },
    {
        name: 'contactNo',
        type: 'number',
        placeholder: "Contact Number",
    },
    {
        name: 'emailId',
        type: 'text',
        placeholder: "Email Id",
    },
    {
        name: 'gender',
        type: 'radio',
        options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
        ],
    },
    {
        name: 'address',
        type: 'textarea',
        placeholder: "Address",
    },
    {
        name: 'city',
        type: 'select',
        placeholder: "Select City",
        options: [
            { label: 'Navsari', value: 'Navsari' },
            { label: 'Surat', value: 'Surat' },
            { label: 'Bharuch', value: 'Bharuch' },
        ],
    },
    {
        name: 'docs',
        type: 'checkbox',
        options: [
            { label: 'Adhar card', value: 'Adhar card' },
            { label: 'Voter Id', value: 'Voter Id' },
            { label: 'Driving Lic', value: 'Driving Lic' },
        ]
    },
    {
        name: 'password',
        type: 'text',
        placeholder: "Password",
    },
    {
        name: 'conformPass',
        type: 'text',
        placeholder: "COnform Password",
    },
];

export default function Form2() {
    return (
        <>
            <style>
                {
                    `@layer base {
                        input[type="number"]::-webkit-inner-spin-button,
                        input[type="number"]::-webkit-outer-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }
                    }`
                }
            </style>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log("Submitted Values:", values);
                    setSubmitting(true);
                    Swal.fire({
                        title: "Submitted!",
                        text: "Your form has been submitted.",
                        icon: "success"
                    }).then(() => {
                        setSubmitting(false);
                        resetForm();
                    });

                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="min-h-screen py-28 bg-gray-800">
                            <div className="w-10/12 p-6 sm:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto text-black bg-gradient-to-r from-violet-400 to-violet-200 rounded-xl shadow-lg items-center overflow-hidden">
                                <div className="text-2xl font-medium text-black">
                                    Registration Form
                                </div>
                                <div className="py-2 flex m-auto">
                                    <p>
                                        Fill this form <span className="text-red-600">*</span> are mandatory
                                    </p>
                                </div>
                                <div className="py-2 lg:py-3 gap-5">
                                    {formData.map((field, index) => (
                                        <div key={index} className="flex py-2 lg:py-3 gap-5">
                                            <div className="w-full">
                                                {field.type === 'select' ? (
                                                    <Field
                                                        as="select"
                                                        name={field?.name}
                                                        className={`border ${touched[field.name] && errors[field.name] ? "border-red-500" : "border-gray-400"} w-full p-1 rounded-lg focus:outline-none focus:border-stone-700`}
                                                    >
                                                        <option value="">{field.placeholder}</option>
                                                        {field.options.map((option, index) => (
                                                            <option key={index} value={option.value}>{option.label}</option>
                                                        ))}
                                                    </Field>
                                                ) : field.type === 'textarea' ? (
                                                    <Field
                                                        as="textarea"
                                                        name={field?.name}
                                                        placeholder={field.placeholder}
                                                        className={`border ${touched[field.name] && errors[field.name] ? "border-red-500" : "border-gray-400"} w-full p-1 rounded-lg focus:outline-none focus:border-stone-700 resize-none`}
                                                    />
                                                ) : field.type === 'radio' ? (
                                                    <div>
                                                        {field.options.map((option, idx) => (
                                                            <label key={idx} className="inline-flex items-center">
                                                                <Field
                                                                    type="radio"
                                                                    name={field?.name}
                                                                    value={option.value}
                                                                    className="form-radio h-4 w-4 text-gray-700"
                                                                />
                                                                <span className="mx-2">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                ) : field.type === 'checkbox' ? (
                                                    <div>
                                                        {field.options.map((option, idx) => (
                                                            <label key={idx} className="inline-flex items-center">
                                                                <Field
                                                                    type="checkbox"
                                                                    name={field?.name}
                                                                    value={option.value}
                                                                    className="form-checkbox h-4 w-4 text-gray-700"
                                                                />
                                                                <span className="mx-2">{option.label}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <Field
                                                        type={field.type}
                                                        name={field?.name}
                                                        placeholder={field.placeholder}
                                                        className={`border ${touched[field.name] && errors[field.name] ? "border-red-500" : "border-gray-400"} w-full p-1 rounded-lg focus:outline-none focus:border-stone-700`}
                                                    />
                                                )}
                                                {touched[field.name] && errors[field.name] && (
                                                    <p className="text-red-700">
                                                        <ErrorMessage name={field.name} />
                                                    </p>)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Submit button */}
                                <div className="py-2 lg:py-3">
                                    <button type="submit" className="w-full bg-gray-600 text-white p-3 rounded-xl hover:bg-gray-700 active:bg-gray-800 focus:outline-none focus:ring focus:ring-white">
                                        Save Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}