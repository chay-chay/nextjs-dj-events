import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
   {/*  <h1>Hello</h1>  this is going to show every pages */}
    <Component {...pageProps} /> 
    </>
}

export default MyApp
