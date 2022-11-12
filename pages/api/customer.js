import commerce from "@/utils/commerce";
import axios from "axios"

export default async function customerHandler(req, res) {
    const obj = {
        email: 'anjnay@gmail.com',
        phone: '1234',
        firstname: 'galih',
        lastname: 'kusuma',
        external_id: 'galih anjay',
        meta: {}
    }

    const headers = {
        "X-Authorization": process.env.NEXT_PUBLIC_COMMERCEJS_SECRET_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    const fetch = await axios("https://api.chec.io/v1/customers", {
        method: "POST",
        data: obj,
        headers: headers
    })

    console.log(fetch.data)
}