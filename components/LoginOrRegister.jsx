import { Fragment } from "react"
import Link from "next/link"
import { Input } from "./Input"
import { Button } from "./Button"

const LoginOrRegister = ({ loginOrRegister = 'login' }) => {

    const loginHandler = async () => {
        const loginAPI = await fetch('http://localhost:3000/api/login')

        // loginAPI.then(res => console.log(res))
    }


    const registerHandler = () => {
        console.log('Register')
    }

    const buttonLoginOrRegisterOnCLickHandler = () => {
        if (loginOrRegister === 'login') {
            loginHandler()
        } else {
            registerHandler();
        }
    }

    return (
        <Fragment>
            <div className="flex flex-col mx-auto mt-20 justify-center items-center w-4/5 ">
                {/* title */}
                <h1 className="text-4xl mb-6">My account</h1>
                <div className="rounded flex items-center justify-center mb-8 bg-basic-300 w-1/2 p-1 gap-2">
                    <Link
                        href='/account'
                        className={`flex items-center justify-center rounded-sm  w-1/2 ${loginOrRegister == 'login' ? 'bg-basic-200' : "text-white"} p-1`}
                    >
                        <span className="text-md ">Sign in</span>
                    </Link>
                    <Link
                        href="/account/register"
                        className={`flex items-center justify-center rounded-sm  w-1/2 ${loginOrRegister == 'register' ? 'bg-basic-200' : "text-white"} p-1`}
                    >
                        <span className="text-md  ">Register</span>
                    </Link>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                    <div className="flex flex-col items-start gap-4">
                        <Input placeholder="Email" search="false" />
                        <Input placeholder="Password" search="false" />
                        {/* register only input */}
                        {loginOrRegister === 'register' ? <Input placeholder="Retype-password" search="false" /> : ""}
                        <p className="align-middle justify-center items-center  flex gap-2">
                            <input type="checkbox" name="tesss" value='tesss' />
                            Remember me
                        </p>
                    </div>
                    <Button className="mt-8" onClick={buttonLoginOrRegisterOnCLickHandler}>SIGN IN</Button>
                    <Link href="/forgot-password" className="mt-8">Have you forgotten your password?</Link>
                </div>
            </div>
        </Fragment>
    )
}


export default LoginOrRegister;