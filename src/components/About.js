import aboutimg from '../images/restaurant1.jpg'
import photo2 from '../images/restauranfood.jpg'
const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>The best restaurant in Chicago, serving the best dishes.</p>
        </div>
        <div className="photo-collage">
          <img src={aboutimg} className="photo photo1" alt="collage" />
          <img src={photo2} className="photo photo2" alt="collage" />
        </div>
      </section>
    </>
  )
}

export default About
