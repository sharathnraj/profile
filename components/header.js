import styles from "../styles/Header.module.css"
import LinkedIn from "../styles/icons/linkedin"
import Github from "../styles/icons/github"

const Header = ({ linkedin, github }) => (
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
      <br />
      <p>Download <a href="/Sharath_Nagaraj_Resume.pdf" download  className={styles.HeaderLinks}>my resume</a> (PDF)</p>
    </div>
  </header>
)

export default Header
