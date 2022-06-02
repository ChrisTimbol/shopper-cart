import Image from 'next/image'

export default function Product({ product }) {
  //when add to cart is clicked get product.info and send to cart page
  return (
    <div className="flex flex-col" >
      <div className="flex mx-auto h-5/6 w-9/12 border-8 border-red-500" key={product.id} href="#"> {/*Create dynamic links based on wahts clicked */}
          <img class="object-cover max-w-full h-auto" src={product.image}></img>
        <div className="AllText border-8 border-blue-500 ">
          <h4 className="mt-4 text-xl font-medium text-black-900">{product.title}</h4>
          <h5 className="mt-1 text-lg font-medium text-gray-900">${product.price}</h5>
          <h6>{product.rating.rate}/5 of {product.rating.count} Reviews</h6>
          <h5 className="text-m font-medium">About this Item</h5>
          <p>{product.description}</p>
          <h6>Category: {product.category}</h6>
        </div>
        <div>
        <form>
            Qty:<select class="bg-white-200 border border-gray-200 text-gray-700  px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </form>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Add To Cart
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 rounded">
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex mx-auto h-5/6 w-9/12 border-8 border-red-500" key={product.id} href="#">
        </div>
    </div>
  )
}

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
