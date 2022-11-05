import { Fragment } from "react"
import Link from "next/link"

const LoginOrRegister = ({loginOrRegister = 'login'}) => {

// Psudocode For Logic

const loginHandler = () =>{
return console.log("login")
}


const registerHandler = () => {
return console.log('Register')
}

const buttonLoginOrRegisterOnCLickHandler = () => {
if(loginOrRegister === 'login'){
loginHandler()
} else{
registerHandler();
}
}


return(
<Fragment>
    <div className="flex flex-col mt-20 justify-center items-center ">
        <h1 className="text-4xl mb-6">My account</h1>

        <div className="flex items-center justify-center bg-slate-400 w-1/2 p-1">

            <div className={`flex items-center justify-center  w-1/2
            ${loginOrRegister === 'login' ? "bg-slate-300" : ""} p-1`}>
               <Link href='/account/login' >
                <p className="text-md ">Sign in</p>
               </Link>
            </div>

            <div className={`flex items-center justify-center  w-1/2
            ${loginOrRegister === 'register' ? "bg-slate-300" : ""}  p-1 `}>
                <Link href="/account/register">
                <p className="text-md  ">Register</p>
                </Link>
            </div>

        </div>
    </div>
</Fragment>
)
}


export default LoginOrRegister;