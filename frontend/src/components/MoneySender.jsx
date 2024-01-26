import rondom from './random.jpg'

const MoneySender = () => {


    return (
        <div className="w-full flex items-center justify-center h-screen bg-gray-300 shadow-2xl shadow-black">
            <div className='bg-white w-1/4 rounded-lg p-5'>
                <h1 className='text-2xl mt-2 mb-20 text-center font-bold'>Send Money</h1>
                <div className='flex space-x-3'><img className="rounded-full w-14" src={ rondom } alt="" />
                    <h3 className='text-xl m-auto font-semibold'>Jhon Doe</h3>
                </div>
                <p className='text-sm mt-2 mb-0'>Amount (in Rs)</p>
                <input className='p-2 mb-2 border border-gray-400 rounded-md w-full hover:border-green-300 active:ring-green-600 focus:ring-blue-500 ' placeholder='Enter Amount' type="text" />         
                <button className='bg-green-500 text-white rounded-md my-2 p-2 w-full hover:bg-green-600 active:border-red-400'>Iniate Transfer</button>
            </div>
        </div>
    )
}

export default MoneySender;