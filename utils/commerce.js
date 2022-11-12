import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.NEXT_PUBLIC_COMMERCEJS_API_KEY, true)

export default commerce