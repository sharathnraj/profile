import Head from "next/head"
import dynamic from "next/dynamic"
import styles from "../styles/Home.module.css"
import Nav from "../components/nav"
import Header from "../components/header"
// import { getStrapiMedia } from "../lib/media"
// import { fetchAPI } from "../lib/api"

const Intro = dynamic(() => import("../components/intro"))
const About = dynamic(() => import("../components/about"))

const Home = ({ profiles, homepage }) => {
  // const { seo } = homepage
  // const profile = profiles[0]


  return (
  <div
    className={styles.Home}
    style={
      typeof window !== "undefined" &&
      window &&
      window.innerHeight ?
      {
        height: `${window.innerHeight}px`
      } : {}
    }>
    <Head>
      <title>Sharath | Fullstack developer</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <meta property="og:image" content={getStrapiMedia(seo.shareImage)} />
      <meta name="twitter:image" content={getStrapiMedia(seo.shareImage)} />
      <meta name="image" content={getStrapiMedia(seo.shareImage)} /> */}
    </Head>
    <Nav />
    <Header />
    <main className={styles.Main}>
      <Intro />
      <About />
    </main>
  </div>
)}

// export async function getStaticProps() {
//   const [profiles, homepage] = await Promise.all([
//     fetchAPI("/profiles"),
//     fetchAPI("/homepage")
//   ])

//   return {
//     props: { profiles, homepage },
//     revalidate: 1
//   }
// }

export default Home
