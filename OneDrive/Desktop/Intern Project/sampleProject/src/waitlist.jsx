// import React from 'react'
import { useState } from 'react'


import darkarrow from "./assets/up-arrow.svg"
import upArrow from "./assets/Vector (2).svg"
import Getus from "./assets/getus.png"
import Earth from "./assets/Shape.svg"
import Frame from "./assets/pixelarticons_calendar-text.svg"
import sparkle from "./assets/Vector.svg"


export const Waitlist = () => {
  const [waitlist1, setWaitlist1] = useState(false)
  const [waitlist2, setWaitlist2] = useState(false)
  const [waitlist3, setWaitlist3] = useState(false)
  function Faq() {
    console.log("clicked")
    setWaitlist1(!waitlist1)
  }
  function Faq2(){
    setWaitlist2(!waitlist2)
  }
  function Faq3(){
    setWaitlist3(!waitlist3)

  }


  return (
    <>
      {/* ..................................................................... */}
      <section className="text-white h-fit md:h-fit grid grid-cols-1 md:grid-cols-2 my-28 mx-10 items-center justify-center">
        <div className="md:ml-16">
          <h5 className="text-zink">Our Solutions</h5>
          <h1 className="mt-9 text-2xl md:text-4xl font-bold ">Our Waitlist Program-</h1>
          <h3 className="text-xl my-4 text-blue md:text-3xl">The following options for</h3>
          <span className="text-xl my-4 text-blue md:text-3xl">whitelist capturing</span>
          <div className="flex gap-10 my-12">
            <button className='border-zink border flex items-center gap-2 px-2 py-2 rounded-md shadow-md shadow-zink text-zink text-xs md:textsm'>Start Building
              <img src={upArrow} alt="" />
            </button>
            <button className='border-black border bg-blue flex items-center gap-2  px-2 py-2 rounded-md shadow-md shadow-blue text-black font-bold text-xs md:text-sm'>Join Waitlist
              <img src={darkarrow} alt="" className="h-3" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-28 md:grid-cols-2 md:mt-1 gap-4 md:flex md:justify-center">
          <div className="border border-emerald-950 shadow-md shadow-blue p-4 text-center  rounded-3xl md:w-full md:p-2 ">
            <div className="bg-emerald-950 w-fit md:w-11/12 z-20 rounded-md relative md:ml-5 md:mt-4">
              <img src={Getus} alt="" className="h-20 md:h-24 w-96 md:w-full rounded-md blur-sm z-10 opacity-10" />
              <div className="font-train text-4xl absolute top-3 left-16 md:top-6 md:left-36">
                Join us
              </div>
            </div>
            <h4 className="mt-9 text-xl text-blue">Join Waitlist</h4>
            <p className="mt-3 text-zink">Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Autem, tempore quisquam eligendi enim veritatis totam ab impedit, sed est ad possimus?</p>
          </div>

          <div className="mt-20 -mx-7 flex gap-4 md:block md:mt-0 md:mx-3 w-fit">


            <div className="shadow-md shadow-blue border border-emerald-950 px-6 rounded-xl mt-5 md:py-4 md:px-10  hover:border hover:border-blue">
              <div className="border  border-blue rounded-full w-fit h-fit px-1 py-1 mt-2">
                <p className="font-train border  border-blue rounded-full w-fit h-fit px-2 py-1  text-blue text-2xl">1.</p>
              </div>
              <h4 className="text-center my-2 text-zink text-xs md:text-sm">waitlist</h4>
            </div>
            <div className="shadow-md shadow-blue border border-emerald-950 px-6 rounded-xl mt-5 md:py-4 md:px-10  hover:border hover:border-blue">
              <div className="border  border-blue rounded-full w-fit h-fit px-1 py-1 mt-2">
                <p className="font-train border  border-blue rounded-full w-fit h-fit px-2 py-1  text-blue text-2xl">2.</p>
              </div>
              <h4 className="text-center my-2 text-zink text-xs md:text-sm">Stake</h4>
            </div>
            <div className="shadow-md shadow-blue border border-emerald-950  px-6 rounded-xl mt-5 md:py-4 md:px-10  hover:border hover:border-blue">
              <div className="border  border-blue rounded-full w-fit h-fit px-1 py-1 mt-2">
                <p className="font-train border  border-blue rounded-full w-fit h-fit px-2 py-1  text-blue text-2xl">3.</p>
              </div>
              <h4 className="text-center my-2 text-zink text-xs md:text-sm">NFT</h4>
            </div>

          </div>

        </div>
      </section>
      {/* ............................................................................... */}

      <h1 className="text-white mt-64 text-center text-3xl font-bold">Discover the <span className="text-blue">Waitlist</span></h1>
      <section className="text-white  grid grid-cols-1 md:grid-cols-2 my-16 justify-center items-center relative md:my-44 h-fit ">
        <div className="flex flex-col  mx-12 md:ml-52">
          <h1 className="text-2xl md:text-3xl font-semibold">About <span className="text-blue">Waitlist</span></h1>
          <p className="text-zink text-xs md:text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores vel,
            laudantium quas quia voluptate </p>
          <p className="text-zink text-xs md:text-lg mt-4">Vestibulum lep diam,efficitur non feils id,feugiat condimentum neque</p>
          <button className='border-black border bg-blue flex items-center gap-2  px-2 py-2 rounded-md shadow-md shadow-blue text-black font-bold w-fit text-xs mt-3 md:text-sm'>Join Waitlist
            <img src={darkarrow} alt="" className="md:h-3 " />
          </button>
        </div>
        <div className="mb-20">
          <img src={Earth} alt="" className="absolute w-28 top-24 -right-4 md:right-4 md:-top-36 " />
          <img src={Earth} alt="" className="absolute w-44 top-40 right-6 md:right-32 md:-top-12"/>
          <img src={Earth} alt="" className="hidden absolute md:block md:right-56 md:top-8 w-80" />
          <img src={Earth} alt="" className="hidden absolute md:block md:right-96 md:top-8 " />
          <img src={Earth} alt="" className="absolute w-64 top-50 -left-4 md:hidden  "id='Earth' />
        </div>
      </section>
      {/* ................................................................................................................................... */}
      <h1 className="text-white mt-80 text-center text-3xl font-bold h-fit md:mt-96">How it <span className="text-blue">Works?</span></h1>
      <section className="text-white mt-20 grid grid-cols-1">
        <div className=" flex justify-center items-center ">
          <img src={Frame} alt="" className="bg-zinc-900 px-2 py-3 shadow shadow-blue w-16 md:w-28" />
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <div className="border-dotted border-r-4 md:border-r-8 border-blue py-10  w-fit"></div>
          </div>
          <div className="border-dotted border-t-4 md:border-t-8 border-blue  mx-2 md:mx-96"></div>
          <div className="absolute top-12 text-center md:left-96">
            <div className="flex gap-9 md:gap-36 mx-6">
              <h1 className="bg-zinc-900 px-4 py-3 md:px-6 md:py-5 shadow shadow-blue text-zink text-lg">#1</h1>
              <h1 className="bg-zinc-900 px-4 py-3 md:px-6  md:py-5 shadow shadow-blue text-zink text-lg">#2</h1>
              <h1 className="bg-zinc-900 px-4 py-3 md:px-6  md:py-5 shadow shadow-blue text-zink text-lg">#3</h1>
              <h1 className="bg-zinc-900 px-4 py-3 md:px-6  md:py-5 shadow shadow-blue text-zink text-lg">#4</h1>

            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-center  text-blue font-bold text-2xl">Task Completion</h2>
            <p className="m-4 text-zink md:text-center">"Join the waitlist now to secure your spot and early success to the innovative
             <br /> features and benefits of Semi Hyphen ecosystem".
            </p>
          </div>
        </div>
      </section>
      {/* ....................................................................................................... */}


      <h1 className="text-white mt-44 text-center text-3xl font-bold">FA<span className="text-blue">Q</span></h1>

      <section className="grid grid-cols-1 text-white mx-2 ">
        <div className={` ${waitlist1 ? " bg-gradient-to-bl from-emerald-800 to-black... " : "border border-blue"} mt-12 rounded-md pb-3   md:mx-96 `}>
          <div className="flex gap-4 justify-center items-center mt-4" onClick={Faq} id='FAQ'>
            <div className='flex h-fit '>
              <div className="border p-2 rounded-full bg-zinc-900 h-fit">
                <img src={sparkle} alt="" className="w-6  " />
              </div>
            </div>
              <div className={`${waitlist1 ? "block" : "hidden"}   rounded-md `}>
                <p className="m-2 text-xs w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta ex atque ut. Officiis, vero? Rerum doloribus expedita sunt voluptatem consequuntur, et fugiat voluptas delectus perspiciatis deleniti, similique mollitia hic!</p>
              </div>
            <p className={`${waitlist1 ? "hidden" : "block"} text-sm font-semibold md:text-2xl md:font-bold`}>Who is the CEO of SemiHyphen?</p>
          </div>
        </div>


        <div className={` ${waitlist2 ? " bg-gradient-to-bl from-emerald-800 to-black... " : "border border-blue"} mt-12 rounded-md pb-3   md:mx-96`}>
          <div className="flex gap-4 justify-center items-center mt-4 " onClick={Faq2}>
            <div className='flex h-fit '>
              <div className="border p-2 rounded-full bg-zinc-900 h-fit ">
                <img src={sparkle} alt="" className="w-6  " />
              </div>
            </div>
              <div className={`${waitlist2 ? "block" : "hidden"}   rounded-md `}>
                <p className="m-2 text-xs w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta ex atque ut. Officiis, vero? Rerum doloribus expedita sunt voluptatem consequuntur, et fugiat voluptas delectus perspiciatis deleniti, similique mollitia hic!</p>
              </div>
            <p className={`${waitlist2 ? "hidden" : "block"} text-sm font-semibold md:text-2xl md:font-bold`}>What's features  on SemiHyphen?</p>
          </div>


        </div>
        <div className={` ${waitlist3 ? " bg-gradient-to-bl from-emerald-800 to-black... " : "border border-blue"} mt-12 rounded-md pb-3  duration-1000 md:mx-96`}>
          <div className="flex gap-4 justify-center items-center mt-4 " onClick={Faq3}>
            <div className='flex h-fit'>
              <div className="border p-2 rounded-full bg-zinc-900 h-fit">
                <img src={sparkle} alt="" className="w-6  " />
              </div>
            </div>
              <div className={`${waitlist3 ? "block" : "hidden"}   rounded-md `}>
                <p className="m-2 text-xs w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta ex atque ut. Officiis, vero? Rerum doloribus expedita sunt voluptatem consequuntur, et fugiat voluptas delectus perspiciatis deleniti, similique mollitia hic!</p>
              </div>
            <p className={`${waitlist3 ? "hidden" : "block"} text-sm font-semibold md:text-2xl md:font-bold`}>This year growth in SemiHyphen?</p>
          </div>
        </div>
      </section>




    </>
  )
}
