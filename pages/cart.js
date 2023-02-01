import { useState, useContext, useEffect } from "react"
import Image from "next/image"
import { TotalContext } from "./_app.js"
import QtyButton from "../components/QtyButton"
import ReactStars from 'react-stars'
import Footer from '../components/Footer'
export default function Cart() {

  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0); // the subtotal
  const [total, setTotal] = useContext(TotalContext)
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

    setTotal(products.length)
    localStorage.setItem("products", JSON.stringify(products))
    setSubTotal(
      // Multiply all product's price with product's quantity and add
      products
        .map((item) => item.qty * item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    )
  }, [products])

  return (
    <div className="Page-Container   h-screen">

      <div className="Product-Container flex flex-col">
        {products.map((product, index) => {
          return (
            <div key={index} className="w-10/12 mx-auto">
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
              <h4 className="text-sm  text-gray-700 font-bold">{product.title}</h4>
              <h5 className="text-md ">${product.price}</h5>

              <div className="flex">
                <ReactStars
                  count={5}
                  value={product.rate}
                  size={24}
                  color2={'#ffd700'}
                  edit={false} />
                <div className="py-2 reviews flex justify-end decoration-slate-500 ml-1"> {product.count} Reviews </div>
              </div>

              <QtyButton className=""
                // Pass product and change qty function
                product={product}
                changeQty={changeQty}
              />
            </div>

          )
        })}

      </div>
<div className="total text-center font-bold ">Total = ${subTotal.toFixed(2)}</div>
      <div className="flex justify-center">
        <button className="checkout-Button h-max bg-purple-600 hover:bg-purple-400 text-white font-bold py-4 my-2 px-12 rounded-full"
          onClick={() => {
            alert("Subtotal: $" + subTotal.toFixed(2))
          }}>
          CHECKOUT
        </button>
      </div>
      <Footer />
    </div>
  )
}
