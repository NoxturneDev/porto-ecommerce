import { Search } from "../../components/Icons"
import ProductsCard from "../../components/ProductsCard"

function Index({ products }) {
    return (
        <div className="font-dm-sans flex debug  items-start justify-center px-4 w-full max-h-4/5">
            {/* shop side component filter */}
            <div className="debug">
                <h1 className="text-2xl">Shop The Latest</h1>
                <label htmlFor="" className="relative">
                    <input type="text" className="border-b-2 border-b-basic-200 focus:border-b-black px-4 py-2 outline-none" />
                    <div className="absolute right-0 top-0">
                        <Search size={24} />
                    </div>
                </label>
                <label htmlFor="" className="relative">
                    <input type="text" className="border-b-2 border-b-basic-200 focus:border-b-black px-4 py-2 outline-none" />
                    <div className="absolute right-0 top-0">
                        <Search size={24} />
                    </div>
                </label>
            </div>
            {/* shop main component gallery of products */}
            <div className="grow debug grid grid-cols-3 grid-rows-2 gap-2 max-h-2/3">
                {products && products.map(data => {
                    return (
                        <ProductsCard products={data} key={data.id} />
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
