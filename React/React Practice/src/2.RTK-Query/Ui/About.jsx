import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { FatchSingleUserData } from '../Redux/features/API/Api';

export default function About() {
    
    let APIData = useSelector((store) => {
        return store.APISlice.single;
    })
    console.log("🚀 ~ APIData ~ APIData:=========================", APIData)

    const navigate = useNavigate()

    return (
        <>
            <Button onClick={() => (navigate("/"))}>Back</Button>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                ID No.
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Contact No
                            </th>
                            <th>
                                City
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{APIData?.id}</td>
                        <td>{APIData?.name?.firstname}</td>
                        <td>{APIData?.phone}</td>
                        <td>{APIData?.address?.city}</td>
                    </tbody>
                </Table >
                {/* <Button onClick={() => navigate("/about")}>click Me</Button> */}
            </div >

        </>
    )
}
