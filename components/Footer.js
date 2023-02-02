/* Footer with basic centering */
export default function Footer() {
    return (
        <footer className="w-screen  mt-auto flex-end p-4 bg-white rounded-lg bg-purple-800 flex align-center justify-center ">
            <div className="sm:flex sm:items-center sm:justify-between ">
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">ShopperCart &#128722;</span>
            </div>
                <div className="text-sm text-white self-center">© 2022 ShopperCart. All Rights Reserved.</div>
        </footer>

    )
}