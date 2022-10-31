
import Image from 'next/image'
import { motion } from 'framer-motion'

function Card({ data, ...props }) {
    return (
        <div className="flex-col shadow-md w-fit">
            {/* product image */}
            <div className="overflow-hidden grow w-fit h-fit cursor-pointer">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "tween" }}
                    className="w-full h-full">
                    <Image src="/img-01.png" alt="image" width={200} height={200} loading="lazy" />
                </motion.div>
            </div>
            {/* product description */}
            <div className="px-2 py-1 flex-col gap-2 my-2">
                <h2 className='font-dm-sans font-semibold tracking-wider uppercase'>Product title</h2>
                <h2 className='text-brand font-semibold'>$200.00</h2>
            </div>
        </div>
    )
}


export default Card