import { useState, useContext, useEffect} from "react";
import Image from "next/image";
import { setTotalContext } from "../pages/_app.js";
import QtyButton from "../components/QtyButton";
export default function Cart() {
  const setTotal = useContext(setTotalContext);
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0); // the subtotal

  // Change the qty of particular product
  const changeQty = (item, qty) => {
    setProducts(
      products.map((e) =>
        e.id === item.id ? { ...item, qty: parseInt(qty) } : e
      )
    )
  }

  useEffect(() => {
    // get data
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, [])

  // Calculate subtotal whenever there is change in cart
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    setTotal(products.length)
    setSubTotal(
      // Multiply all product's price with product's quantity and add
      products
        .map((item) => item.qty * item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    )
  }, [products])

  return (
    <div className="Page-Container">
      
      <div className="Product-Container ">
        {products.map((product, index) => {
          return (
            <div key={index}>
                            <button
                className="block bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full my-3 "
                onClick={() => {
                  setProducts(products.filter((x) => x.id !== product.id)); //filters out by product id clicked
                }}>x</button>
              <Image
                className=""
                alt="Image Unavailable"
                src={product.image}
                width={300}
                height={300}
              />
              <h4 className="text-sm text-gray-700 font-bold">{product.title}</h4>
              <h5 className="text-lg font-medium ">${product.price}</h5>
              <h6 className="no-underline hover:no-underline">
                {product.rate}/5 of {product.count} Reviews
              </h6>{" "}
              {/*Add stars to */}
     

             <QtyButton className="block "
                // Pass product and change qty function
                product={product}
                changeQty={changeQty}
              />
            </div>

          )
        })}
      </div>
      <div className="flex justify-center">
      <button className="checkout-Button h-max bg-blue-500 hover:bg-blue-800 text-white font-bold py-4 my-2 px-6 rounded-full"
      onClick={() => {
        alert("Subtotal: $" + subTotal.toFixed(2))
      }}>
        CHECKOUT
      </button>
      </div>
    </div>
  )
}
