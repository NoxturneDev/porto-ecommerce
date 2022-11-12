import Commerce from "@chec/commerce.js"

const commerce = new Commerce('pk_test_4831638fed30513ccbe1f0454b201762b05e88bf54a43', true)

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