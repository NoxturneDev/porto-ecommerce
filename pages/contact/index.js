import { Fragment } from "react";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Input";


import {Button} from '../../components/Button';

const Contact = () => {
return (
<Fragment>
    <div className="flex flex-col mt-20  items-center  justify-center">
        <h1 className="text-4xl mb-6">Contact Us</h1>

        <div className="flex mb-10 flex-col w-1/3 items-center  justify-center  ">
        <p>Say Hello send us your thoughts about our products or share
            your ideas with our Team!</p>
           </div>



        <div className="flex border-l-rose-200 ">

            <div className="flex flex-col mr-28 ">
                <Input className="mb-10" placeholder="First name" search='false' />
                <Input placeholder="Email" search='false' />

                <Input className="mt-20" placeholder="Message" search='false' />
            </div>

            <div className="flex flex-col ml-28">
                <Input className="mb-10" placeholder="Last name" search='false' />
                <Dropdown placeholder="Subject" search='false' />

            </div>

        </div>
        <div className="flex mt-10 flex-col   items-center  justify-center">
        
        <Button className="mt-3">Send</Button>

        </div>
        
    </div>
</Fragment>
)
}


export default Contact;