import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useState,createContext } from 'react'


export const getTotalContext = createContext()
export const setTotalContext = createContext()

function MyApp({ Component, pageProps }) {
 // const [getCount, setCount] = useState(0);
  const [total, setTotal] = useState(0)
  return (

    <>
      <getTotalContext.Provider value={total}>
        <setTotalContext.Provider value={setTotal}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </setTotalContext.Provider>
      </getTotalContext.Provider>
    </>
  )
}

export default MyApp

/*

add product total
clean up code and understand everything properly
organize shopcart structure
split into more components
*/