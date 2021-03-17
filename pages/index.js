import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sharath | Fullstack develoepr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello
        </h1>

        <p className={styles.description}>
          My name is Sharath Nagaraj.<br />I can magically turn designs into websites with pixel perfection.
        </p>
      </main>

    </div>
  )
}
