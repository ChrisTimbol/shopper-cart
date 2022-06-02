import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { getCountContext, setCountContext } from "../pages/_app.js";
import Dropdown from "../components/Dropdown";
export default function cart() {
  let getCount = useContext(getCountContext);
  let setCount = useContext(setCountContext);
  const [products, setProducts] = useState([]);

  const changeQty = (item, qty) => {
    setProducts(
      products.map((x) =>
        x.id === item.id ? { ...item, qty: parseInt(qty) } : x
      )
    );
  };

  useEffect(() => {
    // get data
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem('products') !== null) {
  //   setCount(JSON.parse(localStorage.getItem('products')).length)
  //   }
  // })

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    setCount(products.length)
  }, [products]);

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
              height={300}
            />
            <h4 className="text-sm text-gray-700">{product.title}</h4>
            <h5 className="text-lg font-medium ">${product.price}</h5>
            <h6 className="no-underline hover:no-underline">
              {product.rate}/5 of {product.count} Reviews
            </h6>{" "}
            {/*Add stars to */}
            <button
              className="bg-black-500 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full"
              onClick={() => {
                setProducts(products.filter((x) => x.id !== product.id)); //filters out by product id clicked
              }}
            >
              x
            </button>
            {/* <Dropdown/>   */}
            <div>
              <span>Qty:</span>
              <select
                name="quantity"
                id="qty"
                onChange={(e) => changeQty(product, e.target.value)}
                value={product.qty}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}
