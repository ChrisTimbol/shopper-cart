

export default function Footer() {
    return (

        <footer className="flex w-screen   p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ShopperCart &#128722;</span>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 ShopperCart. All Rights Reserved.
                </span>
        </footer>

    )
}