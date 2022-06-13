import { useRouter } from 'next/router'
import Image from 'next/image'

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()
  //Get the paths we want to pre-render based on products
  const paths = products.map(product => ({
    params: {
      productId: product.id.toString(), // converts product.id. to a string for use
    },
  }))
  //Pre-render only these paths at build time else 404
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) { // params refers to params from getStaticPaths
  //params contains ths product id
  // if the route is like /product/1, then params.id is 1
  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
  const product = await res.json()

  // pass post data to the page via props // so when {props} is in Product it will pass the data from fetch
  return { props: { product } }
}

export default function Product({ product }) {
  const router = useRouter()
  
  //when add to cart is clicked get product.info and send to cart page
  return (
    <div>
    <button className="bg-blue-500 hover:bg-gray-500 text-white text-xl font-bold py-2 px-4 rounded-full" 
    onClick={() => router.back()}>🠔</button>
    <div className="flex flex-col" >
       
      <div className="flex mx-auto h-5/6 w-3/4 border-8 " key={product.id} href="#"> {/*Create dynamic links based on wahts clicked */}
          <Image className="object-contain max-w-md h-auto" src={product.image} alt="productImage"/>
        <div className="AllText border-8 ">
          <h4 className="mt-4 text-xl font-medium text-black-900">{product.title}</h4>
          <h5 className="mt-1 text-lg font-medium text-gray-900">${product.price}</h5>
          <h5 className="text-m font-medium">About this Item:</h5>
          <h6>{product.rating.rate}/5 of {product.rating.count} Reviews</h6>
          <p>{product.description}</p>
          <h6>Category: {product.category}</h6>
        </div>
        <div>
        </div>
      </div>
     
      <div className="flex mx-auto h-5/6 w-9/12" key={product.id} href="#">
        </div>
    </div>
    </div>
  )
}

