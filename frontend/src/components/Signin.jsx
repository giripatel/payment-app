
const Signin = () => {

    return (
        <div className="bg-gray-400 w-full h-screen flex">
            <div className="flex  flex-col w-1/4 bg-white p-5 rounded-md m-auto shadow-2xl">
                <h1 className="text-xl font-semibold text-center my-1">Sign In</h1>
                <p className="text-xs text-gray-400 text-center my-1">Enter your credentials to access your account</p>
                <label className="text-xs my-1" htmlFor="email">Email</label>
                <input className="text-xs my-1 border border-gray-300 py-2 rounded-md" placeholder="" type="text" />
                <label className="text-xs my-1" htmlFor="passwrod">Password</label>
                <input className="text-xs my-1 border border-gray-300 py-2 rounded-md" placeholder="" type="text" />
                <button className="text-xs my-2 rounded-md bg-black text-white p-2 font-semibold">Sign In</button>
                <p className="text-xs my-1 text-center">Don't have an account? <span className="underline">Sign Up </span> </p>
            </div>
        </div>
    )
}

export default Signin