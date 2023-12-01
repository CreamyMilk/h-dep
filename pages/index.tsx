import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'


export default function Page() {
  const [loading, setloading] = useState(false)
  const [showPatients, setshowPatients] = useState<boolean>(true)

  async function RegisterUser(e: any) {
    e.preventDefault()
    if (Number(e.target['amt'].value) < 1) return

    setloading(true)
  }

  return (
    <>
      <main className="w-full py-10 px-5 md:w-1/2 lg:w-1/3 flex flex-col items-center mx-auto justify-center gap-4 min-h-screen">
        <h1 className="font-semibold text-2xl">🏥 Tiba Queue</h1>
        <p className="text-gray-500 text-sm text-center">*_*</p>
        {/* <button className="text-sm text-blue-400 hover:text-blue-500">Read More</button> */}

        <Link href="/contributors" className="text-sm text-gray-400"> <span className="underline"></span></Link>

        <div className="flex text-sm items-center lg:p-2 p-1 rounded-lg justify-evenly font-semibold gap-1 bg-gray-100 w-full">
          <button className={ showPatients ? "bg-white rounded-md h-9 justify-center items-center flex w-1/2 py-1" :"rounded-md h-9 justify-center items-center flex w-1/2 py-1"}
          onClick={() => {
            setshowPatients(true)
          }}
          >
            Patients View
          </button>

          <button className= { showPatients ? "w-1/2 h-9 py-1 text-gray-500 lg:hover:bg-white rounded-md" : "bg-white w-1/2 h-9 py-1 text-black lg:hover:bg-white rounded-md" } 
          onClick={() => {
            
            setshowPatients(false)
          }
          }>Doctors View</button>
          {/* <button className="w-1/2 h-9 py-1 text-gray-500 lg:hover:bg-white rounded-md" onClick={() => alert("Crypto Payments Coming Soon")}>Crypto</button> */}
        </div>
        {showPatients ?
        <form onSubmit={RegisterUser} className="w-full shadow-sm mt-3 border rounded-xl flex gap-1 flex-col p-5">
          <label className="text-sm font-demibold text-gray-600" htmlFor="amt">Name</label>
          <input required className="border p-2 rounded-lg outline-none mb-5 placeholder:text-sm" id="amt" type="text" pattern="\d*" placeholder="E.g Gift K" />

          <label className="text-sm font-demibold text-gray-600" htmlFor="emaill">Email</label>
          <input pattern="\d*" required className="border p-2 rounded-lg outline-none mb-5 placeholder:text-sm" id="emaill" type="text" placeholder="E.g test@gmail.com..." />

          <label className="text-sm font-demibold text-gray-600" htmlFor="phn">Phone Number</label>
          <input pattern="\d*" required className="border p-2 rounded-lg outline-none mb-5 placeholder:text-sm" id="phn" type="text" placeholder="E.g 0721..." />


          <button disabled={loading} className="w-full bg-blue-600 disabled:bg-blue-500 h-12 hover:bg-blue-500 text-white mt-5">
            {loading ?
              <Image src={"/rotate-solid.svg"} className="animate-spin mx-auto" width={22} height={10} alt="" />
              : "Book Session"
            }</button>


        </form>
        :

        <form onSubmit={RegisterUser} className="w-full shadow-sm mt-3 border rounded-xl flex gap-1 flex-col p-5">
          <label className="text-sm font-demibold text-gray-600" htmlFor="amt">Serving</label>
          <input required className="border p-2 rounded-lg outline-none mb-5 placeholder:text-sm" id="amt" type="text" pattern="\d*" placeholder="E.g Gift K" />

          <label className="text-sm font-demibold text-gray-600" htmlFor="phn">Phone Number</label>
          <input pattern="\d*" required className="border p-2 rounded-lg outline-none mb-5 placeholder:text-sm" id="phn" type="text" placeholder="E.g 0721..." />



          <button disabled={loading} className="w-full bg-blue-600 disabled:bg-blue-500 h-12 hover:bg-blue-500 text-white mt-5">
            {loading ?
              <Image src={"/rotate-solid.svg"} className="animate-spin mx-auto" width={22} height={10} alt="" />
              : "Mark As Served"
            }</button>


        </form>
}

        <span className="text-gray-400 mt-5 text-sm">
          Made with ❤️ <a className="cursor-pointer hover:underline font-demibold"></a>
        </span>
      </main>

    </>
  )
}