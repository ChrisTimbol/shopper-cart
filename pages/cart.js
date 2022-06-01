import { useState, useContext, useEffect, useRef } from "react";
import Image from 'next/image'
import { getTotalContext, setTotalContext } from "../pages/_app.js"
import Dropdown from '../components/Dropdown'
import QtyButton from '../components/QtyButton'
export default function cart() {

  let total = useContext(getTotalContext)
  let setTotal = useContext(setTotalContext)
  const [products, setProducts] = useState([])
  const [sum, setSum] = useState(0)
  /*   const prices = products.map((x) => x.price).reduce((a, b) => a + b, 0) // use to calculate total price */
  const prices = products.map((x) => x.price).reduce((a, b) => a + b, 0)


  useEffect(() => {
    // localStorage.clear();
    setProducts(JSON.parse(localStorage.getItem("products"))) // get add to cart data initially to create cart
    localStorage.getItem('count') === 0 ? setTotal(JSON.parse(localStorage.getItem("products")).length) : setTotal(localStorage.getItem('count')) // return length if no count total
  }, [])

  useEffect(() => {
    localStorage.setItem('count', total) // stores total for navbar after every change in dropdown etc
  }, [total])


  useEffect(() => {  // upload changes to products to storage every change
    localStorage.setItem("products", JSON.stringify(products))
    setSum(prices) // 
    console.log(products)
  }, [products])
  return (
    <div className="Page-Container">
      <div className="Product-Container">
        {products.map((product, i) => {

          return (
            <div key={i}>
              <Image
                className=""
                alt="Image Unavailable"
                src={product.image}
                width={300}
                height={300} />
              <h4 className="text-sm text-gray-700">{product.title}</h4>
              <h5 className="text-lg font-medium ">${product.price}</h5>
              <h6 className="no-underline hover:no-underline">{product.rate}/5 of {product.count} Reviews</h6> {/*Add stars to */}
              <button className="bg-black-500 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full"
                onClick={() => { //remove product on click of x
                  setProducts(products.filter((x) => x.id !== product.id))//filters out by product id clicked
                  setTotal(total - 1)
                  //     setTotal(total-product.itemQty) // removed item qty from total
                }}>x</button>
              <QtyButton product={product} setTotal={setTotal} total={total} />
      
            </div>
          )
        })}
        <div>Subtotal: ${sum}</div>
      </div>
      <button className="checkout-Button bg-blue-500 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-full">Checkout</button>
    </div>
  )
}


// use total and get price of each product
// multiply em all and add tax to display 
