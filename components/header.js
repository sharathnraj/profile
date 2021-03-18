import Head from "next/head"
import dynamic from "next/dynamic"
import styles from "../styles/Header.module.css"
import SectionStyles from "../styles/Section.module.css"
import Nav from "../components/nav"
import LinkedIn from "../styles/icons/linkedin"
import Github from "../styles/icons/github"

const Header = () => (
  <header className={styles.Header}>
    <div style={{ height: "48px" }} />
    <div>
      <h1>Hello.</h1>
      <p className={styles.Intro}>My name is Sharath Nagaraj.<br />I can magically turn designs into websites with pixel perfection.</p>
    </div>
    <div>
      <p>Find me at:</p>
      <ul className={styles.HeaderIcons}>
        <li>
          <a
            href="https://www.linkedin.com/in/sharath-nagaraj-611a1627/"
            target="_blank"
            rel="noreferrer">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sharathnraj"
            target="_blank"
            rel="noreferrer">
            <Github />
          </a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
