import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


// called once at page reload to fetch store data
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
  console.log(data)
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
              <a key={article.id}  href="#"> {/*Create dynamic links based on wahts clicked */}
                <Image
                  className="hover:opacity-75"
                  alt="Image Unavailable"
                  src={article.image}
                  width={300}
                  height={300} />
                <h4 className="mt-4 text-sm text-gray-700">{article.title}</h4>
                <h5 className="mt-1 text-lg font-medium text-gray-900">${article.price}</h5>
                <h6>{article.rating.rate}/5 of {article.rating.count} Reviews</h6> {/*Add stars to */}
              </a>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}
