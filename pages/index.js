import Head from "next/head"
import dynamic from "next/dynamic"
import styles from "../styles/Home.module.css"
import Nav from "../components/nav"
import Header from "../components/header"

const Intro = dynamic(() => import("../components/intro"))
const About = dynamic(() => import("../components/about"))

const Home = () => {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Sharath | Fullstack developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <main className={styles.Main}>
        <Intro />
        <About />
      </main>
    </div>
  )
}

export default Home
