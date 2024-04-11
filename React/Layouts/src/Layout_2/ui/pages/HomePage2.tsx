import React from 'react'
import Header from '../components/Header/Header';
import Sidebar from '../components/SIdebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';

const HomePage2: React.FC = () => {
    return (
        <>
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className='w-[100%] max-h-[700px] overflow-y-scroll'>
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default HomePage2;