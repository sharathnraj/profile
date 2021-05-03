import SectionStyles from "../styles/Section.module.css"

const Intro = ({ height }) => (
  <section
    id="intro"
    className={`${SectionStyles.Section} ${SectionStyles.Intro}`}
    style={{ height: `${height}px`}}>
    <img src="/profile.webp" className={SectionStyles.Profile} />
  </section>
)

export default Intro
