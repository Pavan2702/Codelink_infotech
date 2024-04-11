import React from 'react'

const Content: React.FC = () => {
    return (
        <>
            <div id="modal" className={`container mx-auto flex justify-center items-center px-4  py-20`}>
                <div className="bg-whit px-3 py-12 flex flex-col justify-center items-center">
                    <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-gray-800 text-center md:w-9/12 lg:w-7/12">Welcome to the coveted family of luxe!</h1>
                    <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12">A confirmation email has been sent to your account, johndoe@gmail.com, with the details of shipping and delivery.</p>
                    <div className="mt-12 md:mt-14 w-full flex justify-center">
                        <button className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:text-white dark:hover:bg-gray-700">Back to store</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content