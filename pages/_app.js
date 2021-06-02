import { ThemeStore } from '../context/ThemeStore'
import '../styles/globals.css'
import Theme from '../Theme'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
     {/* <ThemeStore> */}
      {/* <Theme> */}
        <Header />
        <SearchBar />
        <Component {...pageProps} />
      {/* </Theme> */}
    {/* </ThemeStore> */}
    </>
  )
}

export default MyApp
