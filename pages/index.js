import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react';
import { setTotalContext } from "../pages/_app.js"

export async function getStaticProps() { // called once at page reload to fetch store data
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return {
    props: { // will be passed to page component as props
      data, // data is  a local variable in getStaticProps from the fetch
    },
  }
}

export default function Home({ data }) {
  const [carter, setCarter] = useState([]) // add to cart list saved here
  const setTotal = useContext(setTotalContext)

  // This function run when we click add to cart button
  const addToCart = (product) => {

    let productDetails = {
      image: product.image,
      id: product.id,
      title: product.title,
      rate: product.rating.rate,
      count: product.rating.count,
      price: product.price,
      qty: 1,
    };

    // Check if product already exist in cart
    const productExist = carter.find((x) => x.id === productDetails.id);

    if (productExist) {
      // if product is already present
      // update the quantity of product
      setCarter(
        carter.map((x) =>
          x.id === productExist.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : x
        )
      )
    } else {
      // if product is not present, then add it in cart
      setCarter([...carter, { ...productDetails, qty: 1 }]);
    }
  }

  useEffect(() => {
    // at initial launch get products from local storage and store in carter
    // localStorage.clear();
    if (localStorage.getItem("products") !== null) {
      setCarter(JSON.parse(localStorage.getItem("products")));
    }
  }, []);

  useEffect(() => {
    // anytime there is a change to carter i want it to update the localstorage with carter
    localStorage.setItem("products", JSON.stringify(carter));
    setTotal(carter.length) // when cart update settotal
  }, [carter]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping cart</title>
      </Head>
      <div className="container mx-auto bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((product, i) => (
              <div key={i} className="productContainer">

                <Link href={`/product/${product.id}`}>
                  <a className="hover:opacity-80 hover:underline"> {/*Create dynamic links based on whats clicked */}
                    <Image
                      className=""
                      alt="Image Unavailable"
                      src={product.image}
                      width={300}
                      height={300} />
                    <h4 className="text-sm font-large text-black-700 font-bold">{product.title}</h4>
                    <h5 className="text-lg font-medium ">${product.price}</h5>
                    <h6 className="no-underline hover:no-underline">{product.rating.rate}/5 of {product.rating.count} Reviews</h6> {/*Add stars to */}

                <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => addToCart(product)} >
                  Add To Cart
                </button>
                </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
