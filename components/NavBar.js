import React, { useContext } from 'react'
import { TotalContext } from "../pages/_app.js"
import Link from 'next/link'
export default function NavBar() {

    const [total, setTotal] = useContext(TotalContext); /* Context */

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  bg-purple-800 ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href="/">
                        <a className="flex items-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            ShopperCart
                        </a>
                    </Link>

                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"> {/* Right side of NavBar */}
                        <li>
                            <Link href="/">
                                <a className="text-xl text-white">Shop</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <a className=" text-xl whitespace-nowrap text-white">
                                    &#128722; {/* Shopping cart icon */}
                                    {total} {/* Total products Added to cart */}
                                    </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}