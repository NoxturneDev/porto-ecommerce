import Card from "@/components/Card"
import { Input , Dropdown} from "@/components/Input"

function Index({ products }) {
    return (
        <div className="font-dm-sans flex items-start mt-24 justify-center px-4 w-full h-screen min-h-max">
            {/* shop side component filter */}
            <div className="flex flex-col px-4 gap-4 h-max w-max">
                <h1 className="text-2xl">Shop The Latest</h1>
                <Input search="true"></Input>
                <Dropdown></Dropdown>
                <Dropdown></Dropdown>
            </div>
            {/* shop main component gallery of products */}
            <div className="grow grid grid-cols-3 grid-rows-2 gap-4 max-h-2/3">
                {products && products.map(data => {
                    return (
                        <Card data={data} key={data.id} className="m-2"/>
                    )
                })}
            </div>
            {/* footer */}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products?limit=6')
    const data = await res.json()

    console.log(data)
    return {
        props: {
            products: data.products
        }
    }
}
export default Index
