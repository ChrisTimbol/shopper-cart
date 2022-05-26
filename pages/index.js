import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react';
import { MyContext, setContext } from "../pages/_app.js"
// add addtocart button
// add more details to page
// 

// called once at page reload to fetch store data

//
export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()


  return {
    props: { // will be passed to page component as props
      data, // data is  a local variable in getStaticProps from the fetch
    },
  }
}

export default function Home({ data }) {
  const setCart = useContext(setContext);
  const cart = useContext(MyContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping cart</title>
      </Head>


      <div className="container mx-auto bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((article) => (
              <div className="productContainer">
                <Link key={article.id} href={`/product/${article.id}`}>
                  <a className="hover:opacity-80 hover:underline"> {/*Create dynamic links based on wahts clicked */}
                    <Image
                      className=""
                      alt="Image Unavailable"
                      src={article.image}
                      width={300}
                      height={300} />
                    <h4 className="text-sm text-gray-700">{article.title}</h4>
                    <h5 className="text-lg font-medium ">${article.price}</h5>
                    <h6 className="no-underline hover:no-underline">{article.rating.rate}/5 of {article.rating.count} Reviews</h6> {/*Add stars to */}

                  </a>
                </Link>
                <button onClick={() => setCart(cart + 1)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Add To Cart
                </button>

              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}
