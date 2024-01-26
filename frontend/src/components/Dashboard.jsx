import UserSearch from "./UserSearch";
import { useState } from "react";
const Dashboard = () => {

    const [ users, setUsers ] = useState( [ {
        img_url: "https://unsplash.com/photos/pink-flower-cNGUw-CEsp0",
        name: "Giridhar Patel",
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },{
        img_url: "./random.png",
        name: "Giridhar Patel",  
    },] );
    return (
        <div className="">
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
                    <h3 className="font-semibold my-2 text-lg">Your Balance $5000</h3>
                    <h3 className="font-semibold my-2 text-lg">Users</h3>
                    <input type="text" placeholder="Search" className="border border-gray-300  w-[99%] p-2 m-2" />
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