import React, { useMemo, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
    getPaginationRowModel,
    getSortedRowModel,
    ColumnSort,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { useDataOfApiQuery } from "../../Redux/fetures/Apislice";

const TskTable: React.FC = () => {
    const { data: apiData, isFetching, isLoading } = useDataOfApiQuery("");

    const [sorting, setSorting] = useState<ColumnSort[]>([])
    const [fillter, setFillter] = useState('')

    const columns: ColumnDef<UserData, any>[] = [
        { id: "ID", accessorKey: "id", footer: "id" },
        { id: "Name", accessorKey: "name", footer: "name" },
        { id: "Email", accessorKey: "email", footer: "email" },
        { id: "Password", accessorKey: "password", footer: "password" },
    ];

    const data = useMemo(() => apiData || [], [apiData]);
    console.log("🚀 ~ data:", data)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: fillter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFillter,
    });

    return (
        <div className="container py-10 mx-auto bg-black text-white">
            {isFetching && isLoading ? (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
            ) : (
                <>
                    <div className="border-2 border-gray-500">
                        <div className="flex items-center justify-center p-7">
                            <input
                                className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-green-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-green-400"
                                name="text"
                                type="text"
                                value={fillter}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFillter(e.target.value)}
                            />
                        </div>
                        <table className="min-w-full divide-y divide-white">
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id} className="bg-gray-700">
                                        {headerGroup.headers.map((header) => (
                                            <th
                                                key={header.id}
                                                className="px-6 py-3 text-left text-xl font-medium capitalize"
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {
                                                    // { asc: '🔼', desc: '🔽' }[header.column.getIsSorted()]
                                                    header.column.getIsSorted() ? (
                                                        header.column.getIsSorted() ? '🔽' : '🔼'
                                                    ) : null

                                                }
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="bg-gray-900">
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-800">
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex m-auto justify-center align-middle text-center py-5 gap-4">
                            <div>
                                <button
                                    className="text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700"
                                    onClick={() => table.setPageIndex(0)}
                                >
                                    Prev. Page
                                </button>
                            </div>
                            <div className="">
                                <button
                                    className="text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    ◀️
                                </button>
                            </div>
                            <div className="">
                                <button
                                    className="text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    ▶️
                                </button>
                            </div>
                            <div>
                                <button
                                    className="text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700"
                                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                >
                                    Next Page
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TskTable;


// accessorFn: (row: any) => {
//     if (row && row.users && row.users.length > 0) {
//         // Assuming the first name is stored in the 'firstName' property
//         return row.users.map((user: any) => user.firstName).join(', ');
//     }
//     return '';
// },

// columnFilters: [
//     {
//         id: 'owner',
//         value: 'Alice',
//     }
// ]

// {pageOptions.map((pageOption) => (
//     <button
//       key={pageOption}
//       className={`text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 ${
//         pageIndex === pageOption ? "font-bold" : ""
//       }`}
//       onClick={() => gotoPage(pageOption)}
//     >
//       {pageOption + 1}
//     </button>
//   ))}