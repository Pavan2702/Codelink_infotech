import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function RouterPro() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<ProtectedRouter Component={<Admin/>} />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}