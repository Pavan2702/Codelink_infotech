// import { useEffect, useState } from "react";
// import { Field, Formik } from 'formik';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import InputMask from 'react-input-mask';
// import { FormSchema } from "./Schema";

// interface FormData {
//     FirstName: string;
//     LastName: string;
//     EmailId: string;
//     MobileNo: string;
//     Address: string;
//     id?: number;
// }

// const initialValues = {
//     FirstName: "",
//     LastName: "",
//     EmailId: "",
//     MobileNo: "",
//     Address: "",
// };

// const MyForm = () => {
//     const apiUrl = "https://65bdc4ceb51f9b29e933aa55.mockapi.io/Form";
//     const [data, setData] = useState<FormData[]>([]);
//     const [editData, setEditData] = useState({
//         FirstName: "",
//         LastName: "",
//         EmailId: "",
//         MobileNo: "",
//         Address: "",
//     });
//     // const [editData, setEditData] = useState();




//     const fetchInfo = async () => {
//         try {
//             const response = await fetch(apiUrl);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch data");
//             }
//             const responseData: FormData[] = await response.json();
//             setData(responseData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     const AddData = async (Addvalues: FormData, { resetForm }: { resetForm: () => void }) => {
//         try {
//             const resp = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(Addvalues),
//             });
//             if (!resp.ok) {
//                 throw new Error('Failed to add item from the list.');
//             }
//             const newItem = await resp.json();
//             setData([...data, newItem]);
//         } catch (error) {
//             console.error('Error adding item to the list:', error);
//         }
//         resetForm();
//     };

//     const EditData = async (updateData: FormData) => {
//         try {
//             const resp = await fetch(`${apiUrl}/${updateData.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updateData),
//             });

//             if (!resp.ok) {
//                 throw new Error('Failed to update item from the list.');
//             }

//             // setData(data.map(item => (item.id === updateData.id ? updateData : item)));
//             const updatedItem = await resp.json(); // Get the updated item from the response

//             // Update the state by replacing the old data with the updated data
//             setData(data.map(item => (item.id === updatedItem.id ? updatedItem : item)));
//             setEditData(null);
//         } catch (error) {
//             console.error('Error updating item in the list:', error);
//         }
//     };


//     const DeleteData = async (deleteItemId: number) => {
//         try {
//             const resp = await fetch(`${apiUrl}/${deleteItemId}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             if (!resp.ok) {
//                 throw new Error('Failed to delete item from the list.');
//             }
//             setData(data.filter((item) => item.id !== deleteItemId));
//         } catch (error) {
//             console.error('Error deleting item from the list:', error);
//         }
//     };

//     const handleEdit = (dataObj: FormData) => {
//         console.log("data obj ", dataObj);

//         setEditData({ ...dataObj });
//     };

//     const handleSubmit = async (values: FormData, { resetForm }: { resetForm: () => void }) => {
//         try {
//             if (editData) {
//                 await EditData({ ...editData, ...values });
//             } else {
//                 await AddData(values, { resetForm });
//             }
//             resetForm();
//             setEditData(null); // Reset editData after submission
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };
//     useEffect(() => {
//         if (editData) {
//             initialValues.FirstName = editData.FirstName;
//             initialValues.LastName = editData.LastName;
//             initialValues.EmailId = editData.EmailId;
//             initialValues.MobileNo = editData.MobileNo;
//             initialValues.Address = editData.Address;
//         }
//     }, [editData]);
//     const handleChange = (event: any) => {
//         const { value } = event.target;
//         setEditData(value)
//         // const handleChange = (event: FormData) => {
//         //     const { name, value } = event.target;
//         //     setEditData(prevData => ({
//         //         ...prevData,
//         //         [name]: value
//         //     }));
//     }


//     return (
//         <>
//             <div className="form-container">
//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={FormSchema}
//                     onSubmit={handleSubmit}
//                 >
//                     {({
//                         values,
//                         handleSubmit,
//                         errors,
//                         touched,
//                     }) => {
//                         console.log("value", values);

//                         return (
//                             <div className="form-validation-container" style={{ textAlign: 'center' }}>
//                                 <div className="form-title" style={{ color: 'blue', fontSize: '25px', fontWeight: 'bold' }}>Form Validation</div>
//                                 <div className="form-container bg-body-secondary w-50 m-auto" style={{ display: 'flex', justifyContent: 'center' }}>
//                                     <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
//                                         <div className="mb-3">
//                                             <label htmlFor='name'>First Name:</label><br />
//                                             <Field
//                                                 type="text"
//                                                 placeholder="enter your first name"
//                                                 name="FirstName"
//                                                 value={values.FirstName}
//                                             />
//                                             {errors.FirstName && touched.FirstName ? <p className='error' style={{ color: 'red' }}>{errors.FirstName}</p> : null}
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor='name'>Last Name:</label><br />
//                                             <Field
//                                                 type="text"
//                                                 placeholder="enter your last name"
//                                                 name="LastName"
//                                                 value={values.LastName}
//                                             />
//                                             {errors.LastName && touched.LastName ? <p className='error' style={{ color: 'red' }}>{errors.LastName}</p> : null}
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor='name'>Email Id:</label><br />
//                                             <Field
//                                                 type="text"
//                                                 placeholder="enter your emailid "
//                                                 name="EmailId"
//                                                 value={values.EmailId}
//                                             />
//                                             {errors.EmailId && touched.EmailId ? <p className='error' style={{ color: 'red' }}>{errors.EmailId}</p> : null}
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor='name'>MobileNo:</label><br />
//                                             <InputMask
//                                                 mask="999-999-9999"
//                                                 placeholder="Enter your mobile number"
//                                                 name="MobileNo"
//                                                 value={values.MobileNo}
//                                             />
//                                             {errors.MobileNo && touched.MobileNo ? <p className='error' style={{ color: 'red' }}>{errors.MobileNo}</p> : null}
//                                         </div>
//                                         <div className="mb-3">
//                                             <label htmlFor='name'>Address:</label><br />
//                                             <Field
//                                                 type="text"
//                                                 placeholder="enter your address"
//                                                 name="Address"
//                                                 value={values.Address}
//                                             />
//                                             {errors.Address && touched.Address ? <p className='error' style={{ color: 'red' }}>{errors.Address}</p> : null}
//                                         </div>
//                                         <div className="mb-3">
//                                             <Button type='submit'>{editData ? "Update" : 'Add'}</Button>
//                                         </div>
//                                     </Form>
//                                 </div>
//                             </div>
//                         );
//                     }}
//                 </Formik>
//             </div>
//             <div className='table-container' style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
//                 <table className='table table-striped table-bordered table-hover custom-table' style={{ width: '90%' }}>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Email ID</th>
//                             <th>Mobile No.</th>
//                             <th>Address</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((dataObj) => (
//                             <tr key={dataObj.id}>
//                                 <td>{dataObj.id}</td>
//                                 <td>{dataObj.FirstName}</td>
//                                 <td>{dataObj.LastName}</td>
//                                 <td>{dataObj.EmailId}</td>
//                                 <td>{dataObj.MobileNo}</td>
//                                 <td>{dataObj.Address}</td>
//                                 <td>
//                                     <Button className="m-2" variant="primary" onClick={() => handleEdit(dataObj)}>Edit</Button>{''}
//                                     <Button variant="danger" onClick={() => DeleteData(dataObj.id)}>Delete</Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }

// export default MyForm;
