import React from 'react'
import Header from '../components/Header/Header';
import Sidebar from '../components/SIdebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex flex-1 my-6">
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;