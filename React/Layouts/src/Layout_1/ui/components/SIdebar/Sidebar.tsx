import React from 'react';
import { ArrowPathIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, PlayCircleIcon, PhoneIcon, ChartPieIcon } from '@heroicons/react/24/outline';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const Sidebar: React.FC = () => {
    return (
        <div className="bg-white mt-20 shadow-sm">
            <div className="left-full rounded-3xl bg-white">
                <div className="p-4 max-h-[500px] overflow-y-scroll">
                    {products.map((item) => (
                        <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                                <a href={item.href} className="block font-semibold text-gray-900">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;





// import React, { useState } from 'react';

// const Sidebar: React.FC = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     return (
//         <div className="h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
//             {/* Loading screen */}
//             <div className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-blue-600 hidden">
//                 Loading.....
//             </div>

//             {/* Sidebar */}
//             <div
//                 className={`fixed inset-y-0 z-10 flex w-80 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//                     }`}
//             >
//                 {/* Curvy shape */}
//                 <svg
//                     className="absolute inset-0 w-full h-full text-white"
//                     style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
//                     preserveAspectRatio="none"
//                     viewBox="0 0 309 800"
//                     fill="currentColor"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                         d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
//                     />
//                 </svg>

//                 {/* Sidebar content */}
//                 <div
//                     className={`fixed inset-y-0 z-10 flex w-80 ${isSidebarOpen ? '' : '-translate-x-full'
//                         }`}
//                 >
//                     <div className="flex flex-col flex-1">
//                         <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
//                             {/* Logo */}
//                             <a href="#">
//                                 <span className="sr-only">K-UI</span>
//                                 <svg
//                                     aria-hidden="true"
//                                     className="w-16 h-auto text-blue-600"
//                                     viewBox="0 0 96 53"
//                                     fill="currentColor"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         clipRule="evenodd"
//                                         d="M7.69141 34.7031L13.9492 28.1992L32.0898 52H40.1758L18.4492 23.418L38.5938 0.8125H30.4375L7.69141 26.125V0.8125H0.941406V52H7.69141V34.7031ZM35.3008 26.9102H52.457V21.6016H35.3008V26.9102ZM89.1914 13V35.5117C89.1914 39.2148 88.1719 42.0859 86.1328 44.125C84.1172 46.1641 81.1992 47.1836 77.3789 47.1836C73.6055 47.1836 70.6992 46.1641 68.6602 44.125C66.6211 42.0625 65.6016 39.1797 65.6016 35.4766V0.8125H58.9219V35.6875C58.9688 40.9844 60.6562 45.1445 63.9844 48.168C67.3125 51.1914 71.7773 52.7031 77.3789 52.7031L79.1719 52.6328C84.3281 52.2578 88.4062 50.5352 91.4062 47.4648C94.4297 44.3945 95.9531 40.4453 95.9766 35.6172V13H89.1914ZM89 8H96V1H89V8Z"
//                                     />
//                                 </svg>
//                             </a>

//                             {/* Close btn */}
//                             <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded-lg focus:outline-none focus:ring">
//                                 <svg
//                                     className="w-6 h-6"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                                 <span className="sr-only">Close sidebar</span>
//                             </button>
//                         </div>

//                         <nav className="flex flex-col flex-1 w-64 p-4 mt-4">
//                             <a href="#" className="flex items-center space-x-2">
//                                 <svg
//                                     className="w-6 h-6"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                                     />
//                                 </svg>
//                                 <span>Home</span>
//                             </a>
//                         </nav>

//                         <div className="flex-shrink-0 p-4">
//                             <button className="flex items-center space-x-2">
//                                 <svg
//                                     aria-hidden="true"
//                                     className="w-6 h-6"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                                     />
//                                 </svg>
//                                 <span>Logout</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <main className="flex flex-col items-center justify-center flex-1">
//                 {/* Page content */}
//                 <button
//                     onClick={() => setIsSidebarOpen(true)}
//                     className="fixed p-2 text-white bg-black rounded-lg top-5 left-5"
//                 >
//                     <svg
//                         className="w-6 h-6"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                     <span className="sr-only">Open menu</span>
//                 </button>
//                 <h1 className="sr-only">Home</h1>
//                 <a href="https://github.com/kamona-ui" target="_blank">
//                     <span className="sr-only">Kamona ui</span>
//                     <svg
//                         aria-hidden="true"
//                         className="w-20 h-auto text-blue-600"
//                         viewBox="0 0 96 53"
//                         fill="currentColor"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M7.69141 34.7031L13.9492 28.1992L32.0898 52H40.1758L18.4492 23.418L38.5938 0.8125H30.4375L7.69141 26.125V0.8125H0.941406V52H7.69141V34.7031ZM35.3008 26.9102H52.457V21.6016H35.3008V26.9102ZM89.1914 13V35.5117C89.1914 39.2148 88.1719 42.0859 86.1328 44.125C84.1172 46.1641 81.1992 47.1836 77.3789 47.1836C73.6055 47.1836 70.6992 46.1641 68.6602 44.125C66.6211 42.0625 65.6016 39.1797 65.6016 35.4766V0.8125H58.9219V35.6875C58.9688 40.9844 60.6562 45.1445 63.9844 48.168C67.3125 51.1914 71.7773 52.7031 77.3789 52.7031L79.1719 52.6328C84.3281 52.2578 88.4062 50.5352 91.4062 47.4648C94.4297 44.3945 95.9531 40.4453 95.9766 35.6172V13H89.1914ZM89 8H96V1H89V8Z"
//                         />
//                     </svg>
//                 </a>
//             </main>
//         </div>
//     );
// };

// export default Sidebar;
