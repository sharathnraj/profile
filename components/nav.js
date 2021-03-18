import React, { useState } from "react"
import styles from "../styles/Nav.module.css"
import Menu from "../styles/icons/menu"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`${styles.Nav} ${isMenuOpen ? styles.NavOpen : ""}`}>
      <div className={styles.NavWrapper}>
        <div className={styles.MenuTriggerWrapper}>
          <button
            type="button"
            className={styles.MenuTrigger}
            aria-label="Burger menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span>
                <Menu />
              </span>
          </button>
        </div>
        <div className={styles.Menu}>
          <div className={styles.MenuInner}>
            <ul className={styles.MenuList}>
              <li
                className={styles.MenuListItem}
                onClick={() => {
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  })
                  setTimeout(() => {
                    setIsMenuOpen(false)
                  }, 200)
                }}>
                <h4>About</h4>
                <p>70% water, with barley, yeast and hops.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
