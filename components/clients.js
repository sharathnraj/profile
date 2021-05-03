import SectionStyles from "../styles/Section.module.css"
import styles from "../styles/Clients.module.css"

const Clients = ({ height }) => (
  <section
    id="clients"
    className={`${SectionStyles.Section} ${SectionStyles.Clients}`}
    style={{height: `${height}px`}}>
    <ul className={styles.Clients}>
      <li style={{ backgroundColor: "#004165" }}>
        <img src="/anz.png" />
        <div className={styles.ClientsProject}>
          <p><b>ANZ.com.au</b></p>
          <p>UI redesign project built on AEM with React.js</p>
        </div>
      </li>
      <li style={{ backgroundColor: "#FFFFFF" }}>
        <img src="/dulux.png" />
        <div className={styles.ClientsProject}>
          <p><b>Dulux.com.au</b></p>
          <p>Big platform project built on AEM with React.js and Firebase.</p>
        </div>
      </li>
      <li style={{ backgroundColor: "#101010" }}>
        <img src="/mazda.svg" />
        <div className={styles.ClientsProject}>
          <p><b>Mazda.com.au</b></p>
          <p>Brand VI project built on Episerver with React.js<br />MyMazda was the biggest auto customer portal build.</p>
        </div>
      </li>
      <li style={{ backgroundColor: "#3C1053" }}>
        <img src="/acu.svg" />
        <div className={styles.ClientsProject}>
          <p><b>acucampaigns.com.au</b></p>
          <p>Static site.</p>
        </div>
      </li>
      <li style={{ backgroundColor: "#FFFFFF" }}>
        <img src="/quest.png" />
        <div className={styles.ClientsProject}>
          <p><b>QuestApartments.com.au</b></p>
          <p>Online search and booking engine built on Sitefinity with jQuery.</p>
        </div>
      </li>
      <li style={{ backgroundColor: "#001E62" }}>
        <img src="/porter-davis.svg" />
        <div className={styles.ClientsProject}>
          <p><b>PorterDavis.com.au</b></p>
          <p>Find your style and build a home.<br />Website built on Sitecore.</p>
        </div>
      </li>
    </ul>
  </section>
)

export default Clients
