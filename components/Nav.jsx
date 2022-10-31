import { Search, Cart, Account } from "./Icons"
import Link from 'next/link'

const Nav = ({ children }) => {
    return (
        <main className="px-12">
            <nav className="flex justify-center items-center w-full min-w-max px-8 pt-4 pb-2 border-b-basic-300 border-b-2 mx-auto font-dm-sans mb-10">
                <div className=" p-2 grow font-medium ">
                    <h1 className='font-dm-sans text-brand text-xl tracking-wider'>TokoPaedi</h1>
                </div>
                <div className="flex font-medium gap-12 px-6 border-r-basic-300 border-r-2 mr-4">
                    <Link href="/shop">Shop</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">Our Story</Link>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <Search size={24} />
                    <Cart size={24} />
                    <Account size={24} />
                </div>
            </nav>
            {/* children component here */}
            {children}
        </main>
    )
}

export default Nav 
