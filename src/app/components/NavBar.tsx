import Link from 'next/link';

export default function NavBar() {
    return (
        <div>
            <nav className="w-full bg-gray-800 shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="#">

                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                >
                                    {
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 `}
                        >
                            
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">               
                                <li className="text-white">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/about">
                                        About US
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link href="/contactus">
                                        Contact US
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
