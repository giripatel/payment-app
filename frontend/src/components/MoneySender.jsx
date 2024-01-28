import axios from 'axios';
import rondom from './random.jpg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const MoneySender = ({}) => {

    const [amount,setAmount] = useState(0)    
    const navigate = useNavigate()
    const [serachParams] = useSearchParams()
    const id = serachParams.get('id')
    const name = serachParams.get('name')
    return (
        <div className=" flex h-screen inset-0 items-center justify-center bg-slate-300 shadow-2xl shadow-black ">
            <div className='bg-white w-1/4 rounded-lg p-5 shadow-2xl'>
            <div className='flex justify-end'><button onClick={() => navigate('/dashboard')} className='bg-red-500 px-1 rounded-sm text-white'>X</button></div>
                <h1 className='text-2xl mt-2 mb-20 text-center font-bold'>Send Money</h1>
                <div className='flex space-x-3'><img className="rounded-full w-14" src={ rondom } alt="" />
                    <h3 className='text-xl m-auto font-semibold'>{name}</h3>
                </div>
                <p className='text-sm mt-2 mb-0'>Amount (in Rs)</p>
                <input value={amount} onChange={(e) => {
                    setAmount(e.target.value)
                }} className='p-2 mb-2 border border-gray-400 rounded-md w-full hover:border-green-300 active:ring-green-600 focus:ring-blue-500 ' placeholder='Enter Amount' type="number" />         
                <button onClick={() => {
                    axios.post('http://localhost:3000/api/v1/account/transfer',{
                        amount,
                        to : id
                    },{
                        headers : {
                            'Authorization' : 'Bearer '+localStorage.getItem('token')
                        }
                    })
                    setAmount(0)
                }} className='bg-green-500 text-white rounded-md my-2 p-2 w-full hover:bg-green-600 active:border-red-400'>Iniate Transfer</button>
            </div>
        </div>
    )
}

export default MoneySender;