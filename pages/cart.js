import { useState, useEffect } from "react";
import Image from 'next/image'
export default function cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => { // get data 
    setProducts(JSON.parse(localStorage.getItem("products")))
  }, [])


  if (products !== null) {
    for (let product of products) {
      return (
        <div> {/*Create dynamic links based on wahts clicked */}
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
      
    }
  }
  else {
    return <div> Your cart is empty </div>
  }

}