import SectionStyles from "../styles/Section.module.css"

const Intro = ({ profile }) => (
  <section
    id="intro"
    className={`${SectionStyles.Section} ${SectionStyles.intro}`}
    style={
      typeof window !== "undefined" &&
      window &&
      window.innerHeight ?
      {
        height: `${window.innerHeight}px`
      } : {}
    }>
    <img src="/profile.webp" className={SectionStyles.Profile} />
  </section>
)

export default Intro
