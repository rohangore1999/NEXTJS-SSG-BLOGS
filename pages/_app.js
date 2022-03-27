import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav /> {/*To show NAV in all pages*/}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
