import React from "react";
import { useFormik } from "formik";
import Validation from "../Yup/Validation";
import Swal from "sweetalert2";

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

export default function Form() {
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: Validation,
        onSubmit: (values, { resetForm }) => {
            console.log("======>", values);
            Swal.fire({
                title: "Submitted!",
                text: "Your form has been submitted.",
                icon: "success"
            });
            resetForm();
        },
    });
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
            <form onSubmit={handleSubmit}>
                <div className="min-h-screen py-28 bg-gray-800">
                    <div className="w-10/12 p-6 sm:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto text-black bg-gradient-to-r from-violet-400 to-violet-200 rounded-xl shadow-lg items-center overflow-hidden">
                        <div className="text-2xl font-medium text-black">
                            Registration Form
                        </div>
                        <div className="py-2 flex m-auto">
                            <p>
                                Fill this form <span className="text-red-600">*</span> are
                                mandatory
                            </p>
                        </div>
                        {/* First and last name */}
                        <div className="flex py-2 lg:py-3 gap-5">
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className={`border ${errors.firstName && touched.firstName
                                        ? "border-pink-500"
                                        : "border-gray-400"
                                        } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700`}
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.firstName && touched.firstName && (
                                    <p className="text-red-600 text-sm">{errors.firstName}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className={`border ${errors.lastName && touched.lastName
                                        ? "border-pink-500"
                                        : "border-gray-400"
                                        } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700`}
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lastName && touched.lastName && (
                                    <p className="text-red-600 text-sm">{errors.lastName}</p>
                                )}
                            </div>
                        </div>
                        {/* contact no */}
                        <div className="py-2 lg:py-3">
                            <input
                                type="number"
                                placeholder="Contact No"
                                className={`border ${errors.contactNo && touched.contactNo
                                    ? "border-pink-500"
                                    : "border-gray-400"
                                    } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700 `}
                                name="contactNo"
                                value={values.contactNo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.contactNo && touched.contactNo && (
                                <p className="text-red-600 text-sm">{errors.contactNo}</p>
                            )}
                        </div>
                        {/* email id */}
                        <div className="py-2 lg:py-3">
                            <input
                                type="text"
                                placeholder="Email id"
                                className={`border ${errors.emailId && touched.emailId
                                    ? "border-pink-500"
                                    : "border-gray-400"
                                    } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700`}
                                name="emailId"
                                value={values.emailId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.emailId && touched.emailId && (
                                <p className="text-red-600 text-sm">{errors.emailId}</p>
                            )}
                        </div>
                        {/* Gender */}
                        <div className="py-2 lg:py-3 flex justify-center text-center gap-7">
                            <div className="flex items-center">
                                <label
                                    className={`relative flex items-center rounded-full ${errors.gender && touched.gender
                                        ? "border-red-500"
                                        : "border-gray-400"
                                        }`}
                                    htmlFor="male"
                                >
                                    <input
                                        id="male"
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className={`peer relative h-4 w-4 rounded-full border transition-all before:absolute checked:border-orange-900 checked:before:bg-orange-500`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span
                                        className={`absolute ${values.gender === "male"
                                            ? "text-orange-500"
                                            : "text-gray-400"
                                            } transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2.5 w-2.5"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                        >
                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <label
                                    htmlFor="male"
                                    className={`ms-2 text-sm font-medium ${values.gender === "male"
                                        ? "text-orange-500"
                                        : "text-gray-700"
                                        }`}
                                >
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center">
                                <label
                                    className={`relative flex items-center rounded-full ${errors.gender && touched.gender
                                        ? "border-red-500"
                                        : "border-gray-400"
                                        }`}
                                    htmlFor="female"
                                >
                                    <input
                                        id="female"
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className={`peer relative h-4 w-4 rounded-full border transition-all before:absolute checked:border-fuchsia-900 checked:before:bg-fuchsia-500`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span
                                        className={`absolute ${values.gender === "female"
                                            ? "text-fuchsia-500"
                                            : "text-gray-400"
                                            } transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2.5 w-2.5"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                        >
                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <label
                                    htmlFor="female"
                                    className={`ms-2 text-sm font-medium ${values.gender === "female"
                                        ? "text-fuchsia-500"
                                        : "text-gray-700"
                                        }`}
                                >
                                    Female
                                </label>
                            </div>
                            {errors.gender && touched.gender && (
                                <p className="text-red-600 text-center text-sm">
                                    {errors.gender}
                                </p>
                            )}
                        </div>
                        {/* Address */}
                        <div className="py-2 lg:py-3">
                            <textarea
                                type="text"
                                placeholder="address"
                                className={`border ${errors.address && touched.address
                                    ? "border-pink-500"
                                    : "border-gray-400"
                                    } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700 resize-none`}
                                name="address"
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.address && touched.address && (
                                <p className="text-red-600 text-sm">{errors.address}</p>
                            )}
                        </div>
                        {/* Select city */}
                        <div className="py-2 lg:py-3">
                            <select
                                id="city"
                                className={`border ${errors.city && touched.city
                                    ? "border-pink-500"
                                    : "border-gray-400"
                                    } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700 ${values.city === "" ? "text-gray-500" : "text-black"
                                    }`}
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="">Select City</option>
                                <option value="surat">Surat</option>
                                <option value="navsari">Navsari</option>
                                <option value="Bharuch">Bharuch</option>
                            </select>
                            {errors.city && touched.city && (
                                <p className="text-red-600 text-sm pt-1">{errors.city}</p>
                            )}
                        </div>
                        {/* Document */}
                        <div className="py-2 lg:py-3">
                            <div className="w-full sm:h-12 sm:flex lg:justify-center gap-3 lg:gap-5 rounded-lg">
                                <div className="flex items-center mb-1 sm:mb-0">
                                    <input
                                        id="checkbox-1"
                                        type="checkbox"
                                        value="aadhar_card"
                                        className="w-4 h-4 ms-1 lg:ms-0 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        name="docs"
                                        checked={values.docs.includes("aadhar_card")}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <label
                                        htmlFor="checkbox-1"
                                        className={`ms-2 lg:ms-3 text-sm font-medium ${values.docs.includes("aadhar_card")
                                            ? "text-gray-950"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        Aadhar card
                                    </label>
                                </div>
                                <div className="flex items-center mb-1 sm:mb-0">
                                    <input
                                        id="checkbox-2"
                                        type="checkbox"
                                        value="driving_licence"
                                        className="w-4 h-4 ms-1 lg:ms-0 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        name="docs"
                                        checked={values.docs.includes("driving_licence")}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <label
                                        htmlFor="checkbox-2"
                                        className={`ms-2 lg:ms-3 text-sm font-medium ${values.docs.includes("driving_licence")
                                            ? "text-gray-950"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        Driving Licence
                                    </label>
                                </div>
                                <div className="flex items-center mb-1 sm:mb-0">
                                    <input
                                        id="checkbox-3"
                                        type="checkbox"
                                        value="voter_id"
                                        className="w-4 h-4 ms-1 lg:ms-0 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        name="docs"
                                        checked={values.docs.includes("voter_id")}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <label
                                        htmlFor="checkbox-3"
                                        className={`ms-2 lg:ms-3 text-sm font-medium ${values.docs.includes("voter_id")
                                            ? "text-slate-950"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        Voter Id
                                    </label>
                                </div>
                            </div>
                            <div className="justify-center flex">
                                {errors.docs && touched.docs && (
                                    <p className="text-red-600 text-sm">{errors.docs}</p>
                                )}
                            </div>
                        </div>
                        {/* Password */}
                        <div className="py-2 lg:py-3">
                            <input
                                type="text"
                                placeholder="Password"
                                className={`border ${errors.password && touched.password
                                    ? "border-pink-500"
                                    : "border-gray-400"
                                    } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700`}
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password && (
                                <p className="text-red-600 text-sm">{errors.password}</p>
                            )}
                        </div>
                        {/* Conform Password */}
                        <div className="py-2 lg:py-3">
                            <input
                                type="text"
                                placeholder="Confirm Password"
                                className={`border ${errors.conformPass && touched.conformPass
                                    ? "border-pink-500"
                                    : "border-gray-400"
                                    } w-full p-1 rounded-lg focus:outline-none focus:border-stone-700`}
                                name="conformPass"
                                value={values.conformPass}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.conformPass && touched.conformPass && (
                                <p className="text-red-600 text-sm">{errors.conformPass}</p>
                            )}
                        </div>
                        {/* Submit button */}
                        <div className="py-2 lg:py-3">
                            <button
                                type="submit"
                                className="w-full bg-gray-600 text-slate-50 p-3 border-spacing-4 rounded-xl hover:bg-zinc-900 active:bg-zinc-700 focus:outline-none focus:ring focus:ring-white"
                            >
                                Save Data
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
