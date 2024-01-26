import React from "react";
const  Signup =  () =>  {


    return (
        <div className="bg-gray-500 w-full h-screen flex">
            <div className="bg-white flex flex-col w-1/4 m-auto rounded-xl px-5 py-5"> 
                <h1 className="text-xl font-bold m-1 text-center">Sign Up</h1>
                <p className="text-xs text-gray-500 text-center">Enter your information to create an account</p>
                <label className="text-xs my-1" htmlFor="fistname">First Name</label>
                <input className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="firstname"/>
                <label className="text-xs my-1" htmlFor="lastname">Last Name</label>
                <input className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="lastname"/>
                <label className="text-xs my-1" htmlFor="email">Eamil</label>
                <input className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="email"/>
                <label className="text-xs my-1" htmlFor="password">Password</label>
                <input className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="password"/>
                <button className="bg-black text-white my-1 rounded-md text-xs p-2 font-semibold">Sign Up</button>
                <span className="text-xs text-center my-1">Already have an account? <span className="font-semibold underline">Login</span></span>
            </div>
        </div>
    )
}

export default Signup;