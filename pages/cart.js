import { useState, useContext, useEffect } from "react";
import Image from 'next/image'
import { getCountContext, setCountContext } from "../pages/_app.js"
import Dropdown from '../components/Dropdown'
export default function cart() {
  let getCount = useContext(getCountContext)
  let setCount = useContext(setCountContext)
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(0);

  useEffect(() => { // get data 
    setProducts(JSON.parse(localStorage.getItem("products")))
  }, [])

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem('count')))
  })

  useEffect(() => {
    localStorage.setItem("products",JSON.stringify(products))
  },[products])


  
  return (
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
              onClick={() => {
                setProducts(products.filter((x) => x.id !== product.id))//filters out by product id clicked
              }}>x</button>
             <Dropdown/>  
  
          </div>
        )
      })}

    </div>
  )

}