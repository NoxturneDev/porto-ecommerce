import { Fragment } from "react"
import Link from "next/link"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

const LoginOrRegister = ({loginOrRegister = 'login'}) => {

// Psudocode For Logic

const loginHandler = () =>{
 console.log("login")
}


const registerHandler = () => {
 console.log('Register')
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

        <div className="rounded flex items-center justify-center bg-slate-600 w-1/2 p-1">

            <div className={`flex items-center justify-center  w-1/2
            ${loginOrRegister === 'login' ? 'bg-slate-200' : ""} p-1`}>
               <Link href='/account/login' >
                <p className="text-md ">Sign in</p>
               </Link>
            </div>

            <div className={`flex items-center justify-center  w-1/2
            ${loginOrRegister === 'register' ? "bg-slate-200" : ""}  p-1 `}>
                <Link href="/account/register">
                <p className="text-md  ">Register</p>
                </Link>
            </div>
               
        </div>

      <div className="w-1/2 flex flex-col">
      <Input placeholder="Email" search="false" />
      <Input placeholder="Password" search="false" />
{loginOrRegister === 'register' ?    
<Input placeholder="Retype-password" search="false" /> :
 ""}
      <p className=" align-middle items-center  flex flex-row">
      <input type="checkbox"  name="tesss" value='tesss' />
       Remember me
       </p>
     {/* <button onClick={buttonLoginOrRegisterOnCLickHandler}>click</button> */}
      {/* 
      REPORTT
      BUtton Components cannot execute the function */}
      <Button className="mt-8" onClick={buttonLoginOrRegisterOnCLickHandler}>SIGN IN</Button>
      <p className="mt-8">Have you forgotten your password?</p>
      </div>


    </div>
</Fragment>
)
}


export default LoginOrRegister;