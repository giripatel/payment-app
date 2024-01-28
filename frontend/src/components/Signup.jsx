import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export const  Signup =  () =>  {

    const [username,setUserName] = useState('')
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className="bg-gray-500 w-full h-screen flex">
            <div className="bg-white flex flex-col w-1/4 m-auto rounded-xl px-5 py-5"> 
                <h1 className="text-xl font-bold m-1 text-center">Sign Up</h1>
                <p className="text-xs text-gray-500 text-center">Enter your information to create an account</p>
                <label className="text-xs my-1" htmlFor="fistname">First Name</label>
                <input onChange={
                    (e) => setFirstName(e.target.value)
                } className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="firstname"/>
                <label className="text-xs my-1" htmlFor="lastname">Last Name</label>
                <input onChange={
                    (e) => setLastName(e.target.value)
                } className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="lastname"/>
                <label className="text-xs my-1" htmlFor="email">Eamil</label>
                <input onChange={
                    (e) => setUserName(e.target.value)
                } className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="email"/>
                <label className="text-xs my-1" htmlFor="password">Password</label>
                <input onChange={
                    (e) => setPassword(e.target.value)
                } className="text-xs py-2 my-1 border border-gray-400 rounded-md" type="text" id="password"/>
                <button onClick={async () => {
                    const response = await axios.post('http://localhost:3000/api/v1/user/signup',
                    {
                        username,
                        password,
                        firstname,
                        lastname
                    })
                    console.log(response.data);
                    localStorage.setItem('token',response.data.token)
                }} className="bg-black text-white my-1 rounded-md text-xs p-2 font-semibold">Sign Up</button>
                <span className="text-xs text-center my-1">Already have an account? <span className="font-semibold underline"><Link to={'/signin'}>Login</Link></span></span>
            </div>
        </div>
    )
}

