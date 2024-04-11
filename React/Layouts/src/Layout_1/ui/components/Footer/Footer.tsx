import React from 'react';

interface Link {
    label: string;
    href: string;
}

const Footer: React.FC = () => {
    // Data for the Useful Links section
    const usefulLinks: Link[] = [
        { label: 'About Us', href: 'aboutUS' },
        { label: 'Blog', href: 'blog' },
        { label: 'Github', href: 'gitHUb' },
        { label: 'Free Products', href: 'freePro' },
    ];

    // Data for the Other Resources section
    const otherResources:Link[] = [
        { label: 'MIT License', href: 'hitLic' },
        { label: 'Terms & Conditions', href: 'terms' },
        { label: 'Privacy Policy', href: 'privecy' },
        { label: 'Contact Us', href: 'contactUs' },
    ];

    // Function to render a list of links
    const renderLinks = (links:Link[]) => {
        return links?.map((link, index) => (
            <li key={index}>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={link.href}>{link.label}</a>
            </li>
        ));
    };

    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-bold">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                    </div>
                    {/* Useful Links */}
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled text-stone-500">
                                    {renderLinks(usefulLinks)}
                                </ul>
                            </div>
                            {/* Other Resources */}
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyle text-stone-500">
                                    {renderLinks(otherResources)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            {/* Copyright information */}
                            Copyright © <span id="get-current-year">2021</span>
                            <a className="text-blueGray-500 hover:text-gray-800" target="_blank"> Templets by
                                <a className="text-blueGray-500 hover:text-blueGray-800"> Pavan Patil</a>.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
