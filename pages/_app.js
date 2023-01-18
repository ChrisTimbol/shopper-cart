import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useState,createContext } from 'react'

export const TotalContext = createContext()


function MyApp({ Component, pageProps }) {
  const [total, setTotal] = useState(0) // shopping cart total
  return (

    <>
      <TotalContext.Provider value={ [total, setTotal]}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
      </TotalContext.Provider>
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