import { Fragment } from 'react'
import Image from 'next/image'
import { Button } from "@/components/Button"
import { Socials, Plus, Minus } from "@/icons"


function index({ products }) {
    return (
        <Fragment>
            <section className="grid grid-cols-5 grid-rows-1 w-full px-4 py-6  min-h-min h-[85vh]">
                {/* product other image */}
                <aside className="col-start-1 col-end-1 flex flex-col gap-4 justify-start items-center">
                    <div className="bg-basic-300 w-[5rem] h-[5rem] overflow-hidden rounded-md">
                        <Image src="/img-01.png" width={120} height={120} alt={products.title}></Image>
                    </div>
                    <div className="bg-basic-300 w-[5rem] h-[5rem] overflow-hidden rounded-md">
                        <Image src="/img-01.png" width={120} height={120} alt={products.title}></Image>
                    </div>
                    <div className="bg-basic-300 w-[5rem] h-[5rem] overflow-hidden rounded-md">
                        <Image src="/img-01.png" width={120} height={120} alt={products.title}></Image>
                    </div>
                    <div className="bg-basic-300 w-[5rem] h-[5rem] overflow-hidden rounded-md">
                        <Image src="/img-01.png" width={120} height={120} alt={products.title}></Image>
                    </div>
                </aside>
                {/* product big card img */}
                <section className="col-start-2 col-end-4 row-start-1 w-full h-full  ">
                    <Image src="/img-01.png" width={400} height={400} alt={products.title}></Image>
                </section>
                {/* product details and desciription */}
                <section className="col-start-4 col-end-6 row-start-1 w-full h-full flex flex-col gap-2  ">
                    {/* title and price */}
                    <div className="mb-4">
                        <h1 className='font-bold uppercase tracking-wider'>{products.title}</h1>
                        <h1 className='font-bold text-brand '>${products.price}</h1>
                    </div>
                    {/* ratings and description*/}
                    <article className="my-4">
                        <h1 className='font-medium mb-4'>5 stars Ratings</h1>
                        <p>
                            {products.description}
                        </p>
                        {/* user actionn */}
                        <div className="flex  justify-start items-center w-full mt-6 ">
                            <div className="flex h-20 gap-2 mr-4 justify-center items-center">
                                <button className="flex p-2 items-center justify-center bg-basic-300">
                                    <Plus color="white" />
                                </button>
                                <button className="flex p-2 items-center justify-center bg-basic-300">
                                    <Minus color="white" />
                                </button>
                            </div>
                            <Button type="outline">Add to cart</Button>
                        </div>
                    </article>
                    {/* other product information */}
                    <aside className="mt-2">
                        <div className="flex">
                            <Socials type="instagram" />
                            <div className="grow flex items-end justify-center gap-4">
                                <Socials type="instagram" />
                                <Socials type="instagram" />
                                <Socials type="instagram" />
                                <Socials type="instagram" />
                            </div>
                        </div>
                        {/* category info */}
                        <div className="my-4">
                            <h1 className="font-medium">Stars : <span className="font-bold">Five</span></h1>
                            <h1 className="font-medium">Category : <span className="font-bold">{products.category}</span></h1>
                        </div>
                    </aside>
                </section>
            </section>
        </Fragment>
    )
}

export async function getStaticProps() {
    // const res = await fetch('https://dummyjson.com/products?limit=1')
    // const data = await res.json()

    const data = {
        products: [
            {
                category: 'Jewelry',
                title: 'Poseidon Necklace',
                description: 'Poseidon used necklace for almost 1000 year and its really expensive nowadays so you need tobuy it now or you will never get this change anymore so better you damn buy it right now you goofy ahh',
                price: '1000'
            }
        ]
    }
    return {
        props: {
            products: data.products[0]
        }
    }
}
export default index