import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import React, {useState, useContext, createContext} from 'react'

export const MyContext = createContext();
export const setContext = createContext();
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState(0);

  return (
    <>
      <MyContext.Provider value={cart}> {/* wrap components with provider and value it should access */}
      <setContext.Provider value={setCart}>
      <NavBar />
      <Component {...pageProps}/>
      <Footer />
      </setContext.Provider>
      </MyContext.Provider>
    </>
  )
}

export default MyApp
