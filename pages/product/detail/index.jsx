import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Card from "@/components/Card"
import { Button } from "@/components/Button"
import { Socials, Plus, Minus } from "@/icons"


function index({ products, recommendation }) {
    const [selectedInformation, setSelectedInformation] = useState('')
    const [clicked, setClicked] = useState('')

    const handleInformation = (e) => {
        // get the dataset in html 
        const { information } = e.target.dataset
        e.target.classList.add("text-brand")
        
        // select info based on clickd information then find it in products object data
        for (const d in products) {
            if (information === d) {
                setSelectedInformation(products[d])
                setClicked(e.target)
                handleClicked(e.target)
            }
        }
        
        
    }

    const handleClicked = (element) => {
        // undefined exception
        if(!clicked) return
        console.log(element)

        if(element !== clicked){
            clicked.classList.remove("text-brand")
        }
    }

    useEffect(() => {
        if (!selectedInformation) {
            setSelectedInformation(products.description)
        }
    }, [])

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
            {/* detailed information */}
            <section className="flex flex-col px-8 min-h-max h-48 pb-12">
                {/* header */}
                <nav className="flex justify-start items-center gap-4 h-12 border-b-2 border-b-basic-200 w-full py-4 mb-8">
                    <h1
                        className="font-medium cursor-pointer " data-information="description"
                        onClick={e => handleInformation(e)}
                    >
                        Description
                    </h1>
                    <h1
                        className="font-medium cursor-pointer " data-information="additional"
                        onClick={e => handleInformation(e)}
                    >
                        Additional Information
                    </h1>
                    <h1
                        className="font-medium cursor-pointer " data-information="review"
                        onClick={e => handleInformation(e)}
                    >
                        Review(0)
                    </h1>
                </nav>
                <section className="min-h-max">
                    {/* clicked information */}
                    {selectedInformation ? selectedInformation : 'Loading...'}
                </section>
            </section>
            {/* recommendation items (similar items) */}
            <h1 className='ml-8 font-bold text-2xl text-basic-300'>Similar Items</h1>
            <section className="flex gap-6 justify-center items-center w-full px-8 h-max py-4 my-8">
                {recommendation && recommendation.products.map(prod => {
                    return (
                        <Card data={prod} key={prod.title} />
                    )
                })}
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
                price: '1000',
                additional: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptate.',
                review: 'there is no review yet for this product',
            },
        ]
    }

    const recommendationProducts = {
        products: [
            {
                category: 'Jewelry',
                title: 'Poseidon Necklace 1',
                description: 'Poseidon used necklace for almost 1000 year and its really expensive nowadays so you need tobuy it now or you will never get this change anymore so better you damn buy it right now you goofy ahh',
                price: '1000'
            },
            {
                category: 'Jewelry',
                title: 'Poseidon Necklace 2',
                description: 'Poseidon used necklace for almost 1000 year and its really expensive nowadays so you need tobuy it now or you will never get this change anymore so better you damn buy it right now you goofy ahh',
                price: '1000'
            },
            {
                category: 'Jewelry',
                title: 'Poseidon Necklace 3',
                description: 'Poseidon used necklace for almost 1000 year and its really expensive nowadays so you need tobuy it now or you will never get this change anymore so better you damn buy it right now you goofy ahh',
                price: '1000'
            },
            {
                category: 'Jewelry',
                title: 'Poseidon Necklace 4',
                description: 'Poseidon used necklace for almost 1000 year and its really expensive nowadays so you need tobuy it now or you will never get this change anymore so better you damn buy it right now you goofy ahh',
                price: '1000'
            },
            {
                category: 'Jewelry',
                title: 'Poseidon Necklace 5',
                description: 'Poseidon used necklace for almost 1000 year and its really expensive nowadays so you need tobuy it now or you will never get this change anymore so better you damn buy it right now you goofy ahh',
                price: '1000'
            },
        ]
    }

    return {
        props: {
            products: data.products[0],
            recommendation: recommendationProducts
        }
    }
}
export default index