import Commerce from "@chec/commerce.js";

// commerce js SDK 
export const commerce = new Commerce(process.env.NEXT_PUBLIC_COMMERCEJS_API_KEY, true)

// api fetch  to commerce js configurtion
const url = "https://api.chec.io/v1/products"

export const config = {
    public: {
        headers: {
            "X-Authorization": process.env.NEXT_PUBLIC_COMMERCEJS_API_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        url: url
    },
    secret: {
        headers: {
            "X-Authorization": process.env.NEXT_PUBLIC_COMMERCEJS_SECRET_API_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        url: url
    }

}

