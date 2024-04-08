import React from 'react';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { LucideShieldClose } from 'lucide-react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useAddDataMutation, useUpdateDataMutation } from '../../Redux/fetures/Apislice';
import { addRdata, updateRdata } from '../../Redux/fetures/mutation';

const validation = Yup.object({
    name: Yup.string()
        .min(2, "Name is too short, minimum 2 characters required")
        .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed")
        .required("Please enter a name"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Please enter an email address"),
    password: Yup.string().required("Please enter a valid password"),
});

interface AddUserProps {
    isOpen: boolean;
    toggle: () => void;
    initialvalue?: InitialValues
}

interface InitialValues {
    id?: string;
    email: string;
    name: string;
    password: string;
}

const formData: { name: string; type: string; placeholder: string }[] = [
    {
        name: 'email',
        type: 'text',
        placeholder: 'Email Id',
    },
    {
        name: 'name',
        type: 'text',
        placeholder: 'Name',
    },
    {
        name: 'password',
        type: 'text',
        placeholder: 'Password',
    },
];

const AddUser: React.FC<AddUserProps> = ({ isOpen, toggle, initialvalue = { email: '', name: '', password: '' } }) => {
    const [addData] = useAddDataMutation(); // Ensure this hook is properly imported and configured
    const [updateData] = useUpdateDataMutation();
    const dispatch = useDispatch();

    const cancelButton = () => {
        toggle();
    };

    return (
        <Formik
            initialValues={initialvalue || {
                email: "",
                name: "",
                password: "",
            }}
            validationSchema={validation}
            onSubmit={async (values: UserData, { resetForm }: { resetForm: () => void }) => {
                try {
                    if (initialvalue.email && initialvalue.name && initialvalue.password) {
                        const resp = await updateData(values); // Call the mutation with the values
                        if ('data' in resp) {
                            dispatch(updateRdata({ id: initialvalue.id, ...values }));
                            Swal.fire({
                                title: "Updated!",
                                text: "Data has been updated successfully.",
                                icon: "success",
                            });
                            // resetForm();
                            // toggle();
                        }
                    } else {
                        const respn = await addData(values); // Call the mutation with the values
                        console.log("🚀 ~ onSubmit={ ~ resp:", respn)
                        if ('data' in respn) {
                            dispatch(addRdata(values));
                            Swal.fire({
                                title: "Added!",
                                text: "New user has been added successfully.",
                                icon: "success",
                            });
                        }
                    }
                    resetForm();
                    toggle();
                } catch (error) {
                    console.error("Error adding data:", error);
                }
            }}
        >
            {({ errors, touched, values }) => (
                <Form>
                    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
                        <div className="relative p-8 bg-white w-96 rounded-md shadow-lg">
                            <LucideShieldClose
                                type="button"
                                className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800 "
                                onClick={cancelButton}
                            />
                            <h2 className="text-xl font-semibold mb-4">Add User</h2>
                            {formData.map((item, index) => (
                                <div className="flex items-center justify-center py-5" key={index}>
                                    <div className="relative">
                                        <Field
                                            id={item.placeholder}
                                            name={item.name}
                                            type={item.type}
                                            className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                                        />
                                        <label
                                            htmlFor={item.placeholder}
                                            className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:-top-4 peer-focus:text-blue-700 
                                                ${touched[item.name as keyof InitialValues] && errors[item.name as keyof InitialValues] ? 'text-red-500' : ''}
                                                ${values[item.name as keyof InitialValues] ? '-top-[16px] text-xs text-blue-700' : ''}`}
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
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Submit Data
                                </button>
                                <button
                                    type="button"
                                    onClick={cancelButton}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddUser;
