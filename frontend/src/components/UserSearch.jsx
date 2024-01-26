import { useState } from "react"
import random from './random.jpg'

const UserSearch = ({user}) => {

    return (
        <div className="flex justify-between mx-6 my-2" >
            <div className="flex space-x-5">
                <img className="rounded-full w-10" src={random} alt="Image" />
                <h1 className="text-lg mt-1">{user.name}</h1>
            </div>
            <button className="bg-black text-white rounded-md px-1 ">Send Money</button>
        </div>
    )
} 

export default UserSearch;