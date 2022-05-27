import { useState, useContext, useEffect } from "react";
import Image from 'next/image'
import { getCountContext, setCountContext } from "../pages/_app.js"

export default function cart() {
  let getCount= useContext(getCountContext)
  let setCount= useContext(setCountContext)
  const [products, setProducts] = useState([]);
  useEffect(() => { // get data 
    setProducts(JSON.parse(localStorage.getItem("products")))
  }, [])

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem('products')).length)
  })



  return (
  <div className="Product-Container">
  {products.map((product,i) => {
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
      </div>
    )
  })}

  </div>
  )

}