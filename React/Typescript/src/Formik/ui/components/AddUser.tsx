// import React from 'react';
// import { Field, Formik } from 'formik';
// import { LucideShieldClose } from 'lucide-react';
// import { useAddDataMutation, useUpdateDataMutation } from '../../Redux/fetures/Apislice';
// import { useDispatch } from 'react-redux';
// import { addRdata, updateRdata } from '../../Redux/fetures/mutation';
// import Swal from 'sweetalert2';

// interface Data {
//     email: string;
//     name: string;
//     password: string;
// }

// interface AddUserProps {
//     isOpen: boolean;
//     toggle: () => void;
//     // data: Data;
//     initialValues: Data;
// }

// const formData: { name: keyof Data; type: string; placeholder: string }[] = [
//     {
//         name: 'email',
//         type: 'text',
//         placeholder: 'Email Id',
//     },
//     {
//         name: 'name',
//         type: 'text',
//         placeholder: 'Name',
//     },
//     {
//         name: 'password',
//         type: 'text',
//         placeholder: 'Password',
//     },
// ];



// const AddUser: React.FC<AddUserProps> = ({ isOpen, toggle, initialValues = { email: '', name: '', password: '' } }) => {
//     console.log("🚀 ~ initialValues:", initialValues);

//     const [addData] = useAddDataMutation();
//     // const [updateData] = useUpdateDataMutation();

//     const dispatch = useDispatch();

//     const cancelButton = () => {
//         toggle();
//     };

//     return (
//         <>
//             <Formik
//                 initialValues={initialValues || { email: '', name: '', password: ''}}
//                 onSubmit={async (values, { resetForm }) => {
//                     console.log("add value", values);
//                     try {
//                         const resp = await addData(values);
//                         if (resp.isConfirmed) {
//                             dispatch(addRdata(values));
//                         }
//                         Swal.fire({
//                             title: "Added!",
//                             text: "New user has been added successfully.",
//                             icon: "success",
//                         });
//                         resetForm();
//                         toggle();
//                     } catch (error) {
//                         console.error("Error adding data:", error);
//                     }
//                 }}
//             >

//                 {({ errors, touched, values }) => (
//                     <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
//                         <div className="relative p-8 bg-white w-96 rounded-md shadow-lg">
//                             <LucideShieldClose
//                                 type="button"
//                                 className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800 "
//                                 onClick={cancelButton}
//                             />
//                             <h2 className="text-xl font-semibold mb-4">Add User</h2>
//                             {formData.map((item, index) => (
//                                 <div className="flex items-center justify-center py-5" key={index}>
//                                     <div className="relative">
//                                         <Field
//                                             id={item.placeholder}
//                                             name={item.name}
//                                             type={item.type}
//                                             className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
//                                         />
//                                         <label
//                                             htmlFor={item.placeholder}
//                                             className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:-top-4 peer-focus:text-blue-700 
//                                             ${values[item.name] ? '-top-[16px] text-xs text-blue-700' : ''}
//                                                 ${touched[item.name] && errors[item.name] ? 'text-red-500' : ''}`}
//                                         >
//                                             {item.placeholder}
//                                         </label>
//                                         {touched[item.name] && errors[item.name] && (
//                                             <div className="text-red-500 text-sm mt-1">{errors[item.name]}</div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                             <div className="flex justify-end">
//                                 <button
//                                     type="submit"
//                                     onClick={onsubmit}
//                                     className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                                 >
//                                     Submit Data
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={cancelButton}
//                                     className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </Formik>
//         </>
//     );
// };

// export default AddUser;
