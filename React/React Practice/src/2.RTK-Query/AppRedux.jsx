import React from 'react'
import Data from './Ui/Data'
// import { store } from './Redux/App/store'
// import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { myApi } from './Redux/features/API/Api'


export default function AppRedux() {
    return (
        <>
            <ApiProvider api={myApi}>
                <Data/>
                {/* <Router /> */}
            </ApiProvider>
        </>
    )
}
