import commerce from "@/utils/commerce"

export default async function productHandler(req, res) {
    const { method } = req

    if (method === "GET") {
        try {
            const datas = await commerce.products.list()

            res.json({ msg: "tested", data: datas })
        } catch (err) {
            console.error(err)
        }
    }
}