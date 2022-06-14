import React, { useContext, useEffect, useState } from 'react'
import { getTotalContext, setTotalContext } from "../pages/_app.js"
import Link from 'next/link'
export default function NavBar() {

    let getTotal = useContext(getTotalContext);

    return (

        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-purple-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href="/">
                        <a className="flex items-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            ShopperCart
                        </a>
                    </Link>

                    <div className="" id="">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link href="/">
                                    <a className="text-xl text-white">Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart">
                                    <a className=" text-xl whitespace-nowrap text-white">&#128722;
                                        {getTotal}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}