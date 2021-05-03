import SectionStyles from "../styles/Section.module.css"

const About = ({ height }) => (
  <section
    id="about"
    className={`${SectionStyles.Section} ${SectionStyles.About}`}
    style={{height: `${height}px`}}>
    <div>
      <h2>About me</h2>
      <h3>
        I relish working with designers and excel in translating their designs right down to the last
        pixel. I am a big advocate of accessibility and a huge fan of large platform builds.
      </h3>
      <br /><br />
      <h4>Technical</h4>
      <p>
        Currently (and for the past few years) has all been about React.js and things around it like Redux, NextJS, GraphQL, Gatsby and in general anything JavaScript, HTML and CSS related. Also recently fluent with Google Analytics and Tagmanager.
      </p>
      <h4>Personal</h4>
      <p>
        I grew up in Bangalore, India ... moved to Australia many years ago and now Melbourne is home.
      </p>
    </div>
  </section>
)

export default About
