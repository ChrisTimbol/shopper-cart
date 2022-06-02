import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { getTotalContext, setTotalContext } from "../pages/_app.js";
import Dropdown from "../components/Dropdown";
import QtyButton from "../components/QtyButton";
export default function cart() {
  let total = useContext(getTotalContext);
  let setTotal = useContext(setTotalContext);
  const [products, setProducts] = useState([]);
  const [sum, setSum] = useState(0);
  const [thePrice, setThePrice] = useState(0); // the subtotal
  const [subTotal, setSubTotal] = useState(0); // the subtotal

  // const prices = products.map((x) => x.price).reduce((a, b) => a + b, 0); // use to calculate total price
  //  const prices = products.map((x) => x.price) // array containing prices of each product

  const qtyButtonRef = useRef(null);

  // useEffect(() => {
  //   // localStorage.clear();
  //   setProducts(JSON.parse(localStorage.getItem("products"))) // get add to cart data initially to create cart
  //   localStorage.getItem('count') === 0 ? setTotal(JSON.parse(localStorage.getItem("products")).length) : setTotal(localStorage.getItem('count')) // return length if no count total
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('count', total) // stores total for navbar after every change in dropdown etc
  // }, [total])

  // useEffect(() => {
  //   if (thePrice < 0 ) {
  //     setThePrice(0)
  //   }

  // })
  // useEffect(() => {  // upload changes to products to storage every change
  //   localStorage.setItem("products", JSON.stringify(products))
  //   setSum(prices) //

  // }, [products])

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
    setTotal(products.length);
  }, [products]);

  useEffect(() => {
    setSubTotal(
      products
        .map((item) => item.qty * item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    );
  }, [products]);

  return (
    <div className="Page-Container">
      <div className="Product-Container">
        {products.map((product, index) => {
          //      product.itemQty = 1
          /* 
            var next = products[index]

           if(parseInt(index+1 ) === products.length) {
            next = products[index]
      
          }  
           */
          return (
            <div key={index}>
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
                /*                 onClick={() => { //remove product on click of x
                  setProducts(products.filter((x) => x.id !== product.id))//filters out by product id clicked
                  setTotal(total - 1)
                  setThePrice(thePrice - product.price)
                  //     setTotal(total-product.itemQty) // removed item qty from total
                }} */
              >
                x
              </button>
              <QtyButton
                product={product}
                changeQty={changeQty}
                // next={next}
                // setProducts={setProducts}
                // products={products}
                // prices={prices}
                // thePrice={thePrice}
                // setThePrice={setThePrice}
                // ref={qtyButtonRef}
                // product={product}
                // setTotal={setTotal}
                // total={total}
              />
              {/*           <h5 className="text-lg font-medium ">{product.itemQty}</h5> */}
            </div>
          );
        })}
        <div>Subtotal: ${subTotal.toFixed(2)}</div>
        <button
          className="bg-green-500 hover:bg-gray-400 font-bold py-2 px-4"
          onClick={() => {
            console.log(thePrice);
          }}
        >
          Calc
        </button>
      </div>
      <button className="checkout-Button bg-blue-500 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-full">
        Checkout
      </button>
    </div>
  );
}

// use total and get price of each product
// multiply em all and add tax to display
