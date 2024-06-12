// import React from 'react'
import square from "./assets/square.svg"
import darkarrow from "./assets/up-arrow.svg"
import swap from "./assets/swap.svg"
import liquidity from "./assets/rotate.svg"
import bridge from "./assets/Clip path group.svg"
import upArrow from "./assets/Vector (2).svg"
import background from "./assets/background.svg"
import circle from "./assets/Emblem-2.svg"
import './index.css'




export const Home = () => {
    return (
        <div>
             <section className='md:relative md:flex  md:h-screen h-screen '>
                <div className=' border-emerald-950 bg-gradient-to-tl from-emerald-950 to-black..'>
                    <img src={background} alt="" className='w-80 top-72  right-0 absolute md:top-36 md:right-72 md:w-6/12' />
                    <img src={circle} alt="" className=' hidden md:absolute  md:block md:right-24 lg:top-64 lg:right-40 animate-spin' />
                </div>
                <div className='text-white absolute top-60 left-8 md:top-60 md:left-52 '>
                    <h4 className='text-zink text-sm'>The Exchange needed on Xion</h4>
                    <h4 className='text-zink text-sm'>Everything awesome at one place.</h4>
                    <h1 className='text-white font-semibold text-2xl md:text-5xl mt-4'>REFURBISHING THE <br /> REALM OF <br />EXCHANGES</h1>
                    <div className='flex gap-4 md:gap-16 mt-5'>
                        <button className='border-zink border flex items-center gap-2 px-2 py-2 rounded-md shadow-md shadow-zink text-zink text-xs md:text-lg'>Start Building <img src={upArrow} alt="" className="w-2 md:w3" /></button>
                        <button className='border-black border bg-blue flex items-center gap-2  px-2 py-2 rounded-md shadow-md shadow-blue text-black font-bold text-xs md:text-lg'>Join Waitlist
                            <img src={darkarrow} alt="" className='md:w-3' /></button>
                    </div>
                </div>
            </section>




            <h1 className="text-white text-center text-xl md:text-3xl font-bold -mt-24 md:-mt-16 ">Waitlist Program <span className="text-blue">Semi Hyphen</span></h1>


            <section className='text-white h-screen grid items-center  grid-cols-1 md:grid-cols-2 relative -mt-5'>

                <div className="mb-44">
                    <img src={square} alt="" className="absolute top-32  md:top-24 md:w-7/12" />
                    <div className="absolute left-16 top-12 md:left-40 md:top-16">
                        <div className="mt-20 text-zink text-sm">Our Solutions</div>
                        <h1 className="text-white font-bold text-xl md:text-3xl mt-8 mb-3">Our Waitlist Program-</h1>
                        <span className="text-blue text-xl md:text-2xl font-semibold leading-3 shadow-green">The following Options for <br />whitelist capturing</span>
                        <p className=" mt-8 md:mt-20 text-zink text-sm">Wallet Conformation.Token acquisition .NFT acquisition</p>
                    </div>
                </div>

                <div className=" md:-mt-48 flex flex-col items-center mt-44">
                    <p className="border border-emerald-950 bg-gradient-to-tl from-emerald-950 to-black...  w-8/12 h-28 rounded-lg pl-3 pt-3"><span>1.</span>Join waitlist by signing with your Wallet address or with your email</p>
                    <p className="border border-emerald-950 bg-gradient-to-tl from-emerald-950 to-black...  w-8/12 h-28  rounded-lg mt-3 pl-3 pt-3"><span>2.</span>Should take 20,000 SCLX tokens</p>
                    <p className="border border-emerald-950 bg-gradient-to-tl from-emerald-950 to-black...  w-8/12 h-28  rounded-lg mt-3 pl-3 pt-3"><span>3.</span>Shoud Have Scalex Bot NFT</p>
                </div>

            </section>

            <section className="text-white mx-5 md:mx-20 mt-40 md:-mt-20 border border-emerald-800 bg-gradient-to-tl from-emerald-800 to-black... md:p-4 h-fit rounded-lg">
                <div className="grid  mt-6 items-center grid-cols-1 md:flex md:justify-between gap-4">
                    <h1 className="ml-4 text-4xl font-bold">Getting Started with <br /><span className="text-blue font-extrabold">SemiHyphen</span></h1>
                    <button className="flex bg-blue py-2 px-2 text-sm rounded-lg shadow-blue shadow-md font-bold border-black border h-fit w-fit ml-4  text-black items-center gap-2">Join Waitlist <img src={darkarrow} alt="" /></button>
                </div>
                <div className="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-4">
                    <div className="m-8">
                        <img src={swap} alt="" className="w-8" />
                        <h3 className="my-4 font-bold text-lg">Swap</h3>
                        <p className="text-zink">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam delectus a consequatur molestias nulla, esse velit et similique provident error voluptas vel repellendus quod expedita temporibus, rerum porro iusto sint.</p>
                    </div>
                    <div className="m-8">
                        <img src={bridge} alt="" className="w-8" />
                        <h3 className="my-4 font-bold text-lg">Swap</h3>
                        <p className="text-zink">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam delectus a consequatur molestias nulla, esse velit et similique provident error voluptas vel repellendus quod expedita temporibus, rerum porro iusto sint.</p>
                    </div>
                    <div className="m-8">
                        <img src={liquidity} alt="" className="w-8" />
                        <h3 className="my-4 font-bold text-lg">Swap</h3>
                        <p className="text-zink">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam delectus a consequatur molestias nulla, esse velit et similique provident error voluptas vel repellendus quod expedita temporibus, rerum porro iusto sint.</p>
                    </div>

                </div>
            </section>

            <section className="text-white mt-36 text-center">
                <div className=" text-xl md:text-3xl font-extrabold">Join Our Community</div>
                <h1 className=" mt-10 md:mt-16 font-extrabold text-2xl md:text-5xl">Sign UP Follow for Our</h1>
                <h2 className="mt-4 font-bold text-2xl md:text-5xl text-blue">Community Pages</h2>
                <div className="mt-14 flex justify-center gap-4  md:gap-20">
                    <button className="flex items-center border border-zink text-zink rounded-lg px-3 py-1 text-sm">
                        <i className='bx bx-x text-2xl'></i>
                        Twiitter
                        <img src={upArrow} alt="" className="hidden md:block md:ml-2" />
                    </button>
                    <button className="flex items-center border border-zink text-zink rounded-lg px-3 py-1 text-sm">
                        <i className='bx bxl-telegram text-2xl'></i>
                        Telegram
                        <img src={upArrow} alt="" className="hidden md:block md:ml-2" />
                    </button>
                    <button className="flex items-center border border-zink text-zink rounded-lg px-3 py-1 text-sm">
                        <i className='bx bxl-meta text-2xl'></i>
                        Medium
                        <img src={upArrow} alt="" className="hidden md:block md:ml-2" />
                    </button>
                </div>

            </section>

            <section className="text-white mx-4 md:mx-20 mt-40 border border-emerald-800 bg-gradient-to-tl from-emerald-800 to-black...  h-full rounded-lg">
                <div className="grid justify-center items-center sm:grid-cols-1 md:grid-cols-2 mx-20 my-20">
                    <div className="flex flex-col justify-center">
                        <p className="border-2  w-32"></p>
                        <h1 className="text-4xl font-bold my-4">Newsletter</h1>
                        <p className="font-semibold">Subscribe to the Semi Hyphen newsletter <br />to be updated with the ecosystem</p>
                    </div>
                    <div>
                        <form action="" className="mt-10 flex flex-col">
                            <label htmlFor="email" className="font-semibold">Your email address</label>
                            <input type="email" name="email" className="mt-3 border border-blue bg-emerald-950 py-1 rounded-lg w-72" />
                        </form>
                        <button className="bg-slate-100 text-emerald-900 px-6 py-1 mt-4 rounded-lg">Signin</button>
                    </div>
                </div>
            </section>

            {/*  ...........................................................................................................*/}

            
        </div>
    )
}
