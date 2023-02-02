import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react';
import { TotalContext } from "../pages/_app.js"
import ReactStars from 'react-stars'
import Footer from '../components/Footer'
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
  const [total, setTotal] = useContext(TotalContext)

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
    <div className="">
      <Head>
        <title>Shopping cart</title>
      </Head>

      <div className="shopContainer mx-auto bg-white">
        <div className="max-w-2xl mx-auto  py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((product, i) => (
              <div key={i} className="productContainer text-center  flex border-solid border-2 border-sky-100 flex-col">

                <Link className="" href={`/product/${product.id}`}>
                  <a className="hover:opacity-90 hover:underline my-auto "> {/*Create dynamic links based on whats clicked */}
                    <Image
                      className=""
                      alt="Image Unavailable"
                      src={product.image}
                      width={400}
                      height={400} />
                    <h4 className=" text-black font-medium">{product.title}</h4>
                    <h5 className="font-medium ">${product.price}</h5>
                    <div className="flex">
                      <ReactStars className=""
                        count={5}
                        value={product.rating.rate}
                        size={24}
                        color2={'#ffd700'}
                        edit={false} />
                      <div className="py-2 reviews ml-1"> {product.rating.count} Reviews </div>
                    </div>
                  </a>
                </Link>
                <button className="hover:bg-violet-600 active:bg-violet-700 px-3 py-2 font-medium text-center text-white bg-purple-700 rounded-lg focus:outline-none focus:ring focus:ring-violet-300"
                  onClick={() => addToCart(product)} >
                  Add To Cart
                </button>

              </div> // end of productcontainer
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
