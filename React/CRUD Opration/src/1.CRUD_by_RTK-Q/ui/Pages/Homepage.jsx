import React, { useEffect, useState } from "react";
import {
    useDataOfApiQuery,
    useDeleteDataMutation,
} from "../../Redux/fatures/fetchAPI";
import { PenIcon, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import AddUser from "../Components/modal/AddUser";

export default function Homepage() {
    const { data, isError, isFetching, isLoading } = useDataOfApiQuery();
    const [deleteData] = useDeleteDataMutation();
    const [first, setFirst] = useState([]);
    const [update, setUpdate] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (!isLoading && data) {
            setFirst(data);
        }
    }, [isLoading, data]);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        setUpdate({}); // Reset update data when closing the modal
    };

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You will not be able to recover this data!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, keep it",
            });

            if (result.isConfirmed) {
                await deleteData(id);
                setFirst((prevData) => prevData.filter((item) => item.id !== id));
                Swal.fire("Deleted!", "Your data has been deleted.", "success");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Cancelled", "Your data is safe :)", "error");
            }
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const updataApiData = (upData) => {
        toggleModal();
        setUpdate(upData);
    };

    return (
        <div className="container py-10 mx-auto">
            {isFetching && isLoading ? (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div>
                    <div className="pb-5 flex justify-center">
                        <button
                            className="cursor-pointer font-semibold overflow-hidden rounded-md relative z-100 border border-green-500 group px-8 py-2"
                            onClick={toggleModal}
                        >
                            <span className="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">
                                Add Data
                            </span>
                            <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                            <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">#</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">Username</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">Password</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {first.map((item, i) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{i + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.password}</td>
                                    <td className="flex justify-start space-x-2 px-6 py-4 whitespace-nowrap">
                                        <Trash2 role="button" onClick={() => handleDelete(item.id)} className="cursor-pointer hover:text-red-500" />
                                        <PenIcon role="button" onClick={() => updataApiData(item)} className="cursor-pointer hover:text-blue-500" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {modalOpen && <AddUser isOpen={modalOpen} toggle={toggleModal} initialValues={update}/>}
        </div>
    )
}