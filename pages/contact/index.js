import { Fragment } from "react";
import { Input } from "../../components/Input";

const Contact = () => {
return (
<Fragment>
    <div className="flex flex-col mt-20  items-center  justify-center">
        <h1>Contact Us</h1>
        <p>Say Hello send us your thoughts about our products or share
            your ideas with our Team!</p>

        <div className="flex border-l-rose-200 ">

            <div className="flex flex-col">
                <Input placeholder="First name" search='false' />
                <Input placeholder="First name" search='false' />
                <Input placeholder="First name" search='false' />

            </div>

            <div className="flex flex-col">
                <Input placeholder="First name" search='false' />
                <Input placeholder="First name" search='false' />
                <Input placeholder="First name" search='false' />

            </div>

        </div>

    </div>
</Fragment>
)
}


export default Contact;