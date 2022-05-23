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
      <ul>
        {data.map((article) => ( 
          <li key={article.id}>
        
           <Image alt="Image Unavailable"src={article.image} width={240}
          height={240}/>
            <h4>{article.title}</h4>
            <h5>{article.price}</h5> 
      
          </li>
        ))}
      </ul>


    </div>
  )
}
