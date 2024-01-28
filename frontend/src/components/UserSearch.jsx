import { useState } from "react"
import random from './random.jpg'
import MoneySender from "./MoneySender";
import {createPortal} from 'react-dom'
import TestModel from "./TestModel";
import { Link,useNavigate } from "react-router-dom";
const UserSearch = ({user}) => {

    const [showModal,setShowModal] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="flex justify-between mx-6 my-2"  >
            <div className="flex space-x-5">
                <img className="rounded-full w-10" src={random} alt="Image" />
                <h1 className="text-lg mt-1">{user.firstname}</h1>
            </div>
            <button onClick={() => (navigate('/send?id='+user._id+'&name='+user.firstname))} className="bg-black text-white rounded-md px-1 ">Send Money</button>
        </div>
    )
} 

export default UserSearch;