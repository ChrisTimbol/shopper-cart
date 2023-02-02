import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { useState, createContext } from 'react'

export const TotalContext = createContext() // Initalize a Context object

function MyApp({ Component, pageProps }) {
  const [total, setTotal] = useState(0) // shopping cart total
  return (
    <>
      <TotalContext.Provider value={[total, setTotal]}> {/* allows consuming components to subscribe to context values */}
        <NavBar /> 
        <Component {...pageProps} /> {/* active page */}
      </TotalContext.Provider>
    </>
  )
}
export default MyApp