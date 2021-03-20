// import App from "next/app"
import '../styles/globals.css'
import { createContext } from "react"
// import { getStrapiMedia } from "../lib/media"
// import { fetchAPI } from "../lib/api"

export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => (
  <GlobalContext.Provider value={pageProps.global}>
    <Component {...pageProps} />
  </GlobalContext.Provider>
)

// MyApp.getInitialProps = async (ctx) => {
//   const appProps = await App.getInitialProps(ctx)
//   const global = await fetchAPI("/global")
//   return {
//     ...appProps,
//     pageProps: {
//       global
//     }
//   }
// }

export default MyApp
