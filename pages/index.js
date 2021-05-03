import React, { useState, useEffect } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import styles from "../styles/Home.module.css"
import Nav from "../components/nav"
import Header from "../components/header"
// import { getStrapiMedia } from "../lib/media"
// import { fetchAPI } from "../lib/api"

const Intro = dynamic(() => import("../components/intro"))
const About = dynamic(() => import("../components/about"))
const Clients = dynamic(() => import("../components/clients"))

const Home = ({ profiles, homepage }) => {
  const [height, setHeight] = useState(800)
  // const { seo } = homepage
  // const profile = profiles[0]
  useEffect(() => {
    setHeight(window.innerHeight)
  })

  return (
  <div
    className={styles.Home}
    style={{
      height: `${height}px`
    }}>
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
      <Intro height={height} />
      <About height={height} />
      <Clients height={height} />
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
