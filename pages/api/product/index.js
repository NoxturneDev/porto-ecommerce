import { config } from "@/utils/commerce"
import axios from "axios"

export default async function productHandler(req, res) {
    const fetch = await axios("https://api.chec.io/v1/products", {
        method: 'GET',
        headers: config.public.headers,
    })

    res.status(fetch.status).json({ products: fetch.data })
}