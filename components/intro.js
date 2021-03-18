import SectionStyles from "../styles/Section.module.css"

const Intro = () => (
  <section id="intro" className={`${SectionStyles.Section} ${SectionStyles.intro}`}>
    <img src="/profile.webp" className={SectionStyles.Profile} />
  </section>
)

export default Intro
