import axios from "axios";
import UserSearch from "./UserSearch";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {balanceAtom} from './Recoil.js'
const Dashboard = () => {

    const [ users, setUsers ] = useState([]);
    const [filter,setFilter] = useState('')
    const balance = useRecoilValue(balanceAtom)

    useEffect( ()=> {
        
        axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter)
        .then((response) =>{
            
            setUsers(response.data.users)
        })
    },[filter])

    return (
        <div className="">
            {console.log(users)}
            <div className="m-4">
                <div>
                    <nav className="flex justify-between">
                        <h1 className="font-bold text-xl">Payments App</h1>
                        <div className="flex space-x-2">
                            <p className="">Hello, User</p>
                            <div className="rounded-full size-fit  bg-gray-300 w-6 text-center text-md ">U</div>
                        </div>
                    </nav>
                    <hr className="mt-2"/>
                    <h3 className="font-semibold my-2 text-lg">Your Balance is Rs {" "+balance} </h3>
                    <h3 className="font-semibold my-2 text-lg">Users</h3>
                    <input onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Search" className="border border-gray-300  w-[99%] p-2 m-2" />
                </div>
                {users.map((user ,index) => (
                    <div key={index}>
                        <UserSearch user={user}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Dashboard;