import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'reactstrap';
import { FatchSingleUserData, FatchUserData } from '../Redux/features/API/Api';
import { useNavigate } from 'react-router-dom';

export default function APIData() {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(FatchUserData())
    }, [])

    let APIData1 = useSelector((store) => {
        return store.APISlice.userData;
    })

    const Aboutdetails = (i) => {
        dispatch(FatchSingleUserData(i))
        navigate("/about")
    }


    return (
        <>
            <div>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Contact No
                            </th>
                            <th>
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            APIData1?.map((e, i) => {
                                return <tr key={i}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e.username}
                                    </td>
                                    <td>
                                        {e.phone}
                                    </td>
                                    <td>
                                        <Button onClick={() => Aboutdetails(e.id)}>Show Details</Button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div >
        </>
    )
}
