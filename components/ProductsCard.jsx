import React from 'react'
import Image from 'next/image'
function ProductsCard({ products, ...props }) {
    return (
        <div className="flex-col">
            {/* product image */}
            <div className="overflow-hidden grow ">
                <Image src={products.images[0]} alt={products.description} width={200} height={200} loading="lazy"/>
            </div>
            {/* product description */}
            <div className="flex-col gap-2">
                <h2 className='font-dm-sans font-semibold tracking-wider'>{products.title}</h2>
                <h2 className='text-brand font-semibold'>{products.price}</h2>
            </div>
        </div>
    )
}


export default ProductsCard