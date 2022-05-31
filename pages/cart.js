import { useState, useContext, useEffect } from "react";
import Image from 'next/image'
import { getCountContext, setCountContext, useRef } from "../pages/_app.js"
import Dropdown from '../components/Dropdown'





export default function cart() {
  let getCount = useContext(getCountContext)
  let setCount = useContext(setCountContext)
  const [products, setProducts] = useState([]);


  const [total, setTotal] = useState(0)
  useEffect(() => {
   // console.log("products.length = " + products.length)
    
  }, [total])



  useEffect(() => { // get add to cart data initially to create cart
    setProducts(JSON.parse(localStorage.getItem("products")))
    setTotal(JSON.parse(localStorage.getItem("products")).length) // assigns total to the # of products in cart initially
  }, [])
  useEffect(() => { // upload changes to products to storage every change
    localStorage.setItem("products", JSON.stringify(products))

  }, [products])

  useEffect(() => {  // get navbar count initially
    setCount(JSON.parse(localStorage.getItem('count')))
  }, [])



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
                }}>x</button>
              <Dropdown itemQty={product.itemQty} products={products} setProducts={setProducts} id={product.id} setCount={setCount} getCount={getCount} setTotal={setTotal} total={total}/>

            </div>
          )
        })}
      </div>
      <button className="checkout-Button bg-blue-500 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-full" onClick={() => { 
      }}>Checkout</button>


    </div>
  )

}
