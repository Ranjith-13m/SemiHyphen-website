// import React from 'react'
// import {Routes,Route} from "react-router-dom"
// import { Waitlist } from './waitlist.jsx'
// import {Home} from "./Home.jsx"


import upArrow from "./assets/Vector (2).svg"
import logo from "./assets/logo.svg"
import { useState } from 'react'
import './index.css'

import { Routes, Route } from "react-router-dom"
import { Waitlist } from './waitlist.jsx'
import { Home } from "./Home.jsx"


import { Link } from "react-router-dom"



export const NavbarPage = () => {
    const [app, setAPP] = useState(false)

    function navbar() {
        console.log("clicked")
        setAPP(!app)
    }

    return (
        <div>

{/* .......................................... NavBar..............................................................................................................................  */}
            <section className='flex justify-between p-4 md:ml-8  md:flex sticky top-0 bg-black z-50' >

                <nav className='flex items-center gap-4 bg-black'>
                    <div className='flex justify-between'>

                        <li className='text-blue flex items-center text-base font-bold '>
                            <img src={logo} alt="" className='w-6 mr-2' />
                            <Link to="/">Semi Hyphen</Link>
                        </li>

                        <button className='text-white absolute right-4 md:hidden' onClick={navbar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </button>
                    </div>

                    <a href="" className='hidden md:flex text-zink text-base font-bold md:ml-16'>Doc
                        <img src={upArrow} alt="" className='ml-2' />
                    </a>

                    <li className='hidden md:flex text-zink font-bold text-base ml-16' ><Link to="/waitlist">Waitlist</Link>
                        <img src={upArrow} alt="" className='ml-2' />
                    </li>
                </nav>

                <div className='hidden md:flex items-center gap-6 mr-8 bg-black'>
                    <a href=""><i className='bx bxl-twitter text-zink bg-slate-300 rounded-full   p-2'></i></a>
                    <li href=""><i className='bx bxl-telegram text-zink bg-slate-300 rounded-full p-2' ></i></li>
                    <button className='bg-blue py-2 px-2 text-sm rounded-lg shadow-blue shadow-md font-bold border-black border'>Luanch App</button>
                </div>
            </section>
{/* .................................................End..................................................................................................... */}

 {/* ...............................................Responsive Navbar design fro small screens................................................................................... */}

            <section className={`${app ? "block right-0" : "hidden -right-96"} bg-black flex flex-col  fixed  gap-14 pr-8 pt-6 h-full w-52 z-40`}>
                <a href="" className='flex text-zink text-base font-bold ml-16'>Doc
                    <img src={upArrow} alt="" className='ml-2' />
                </a>

                <a href='waitlist' className='flex text-zink font-bold text-base ml-16'><Link to="/waitlist"></Link>Waitlist
                    <img src={upArrow} alt="" className='ml-2' />
                </a>
                <div className='flex  justify-center gap-6'>
                    <a href=""><i className='bx bxl-twitter text-zink bg-slate-300 rounded-full   p-2'></i></a>
                    <a href=""><i className='bx bxl-telegram text-zink bg-slate-300 rounded-full p-2' ></i></a>
                </div>
                <button className='bg-blue py-2 px-2 text-sm rounded-lg shadow-blue shadow-md font-bold border-black border ml-10'>Luanch App</button>
            </section>
{/* ........................................................End.............................................................................................. */}

{/* .......................................................Routing another pages using React.................................................................. */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/waitlist' element={<Waitlist />} />
            </Routes>
{/* ...................................................................................................................................................... */}

{/* ........................................................Footer........................................................................................... */}
            <footer className="text-white mt-40 h-full  border-t-2 border-zink relative">
                <section className="grid grid-cols-2 items-center justify-center md:grid-cols-5 mx-5 my-5">
                    <img src={logo} alt="" className="w-20 col-span-2" />


                    <div className="flex flex-col">
                        <h4 className="text-zink">Product</h4>
                        <a href="" className="my-3 font-semibold">Doc</a>
                        <a href="" className="font-semibold">Waitlist</a>
                    </div>
                    <div className="flex flex-col mt-6">
                        <h4 className="text-zink">Info</h4>
                        <a href="" className="mt-3 font-semibold">Home</a>
                        <a href="" className="mt-3 font-semibold">Waitlist</a>
                        <a href="" className="mt-3 font-semibold">About Us</a>
                        <a href="" className="mt-3 font-semibold">Community</a>

                    </div>
                    <button className=" bg-blue py-2 px-2 text-sm rounded-lg shadow-blue shadow-md font-bold border-black border h-fit w-fit ">Launch App</button>

                </section>
                <section className="flex justify-between  items-center md:block mt-44">
                    <h1 className=" font-extrabold text-blue text-4xl  md:text-9xl ">SemiHyphen</h1>
                    <p className="text-zink  text-xs md:text-sm ml-2 md:mr-9 " >@Semi Hyphen 2024</p>
                </section>
            </footer>
{/* .........................................................End.......................................................................................................... */}
        </div>
    )
}


