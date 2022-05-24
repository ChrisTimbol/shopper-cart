export default function Product({ prop}) {
  return <p> it work</p>
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

export async function getStaticProps({ params}) {
  //params contains ths product id
  // if the route is like /product/1, then params.id is 1
  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
  const products = await res.json()

  // pass post data to the page via props
  return {props: {products}}
}
