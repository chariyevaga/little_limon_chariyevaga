import { Link } from 'react-router-dom'
import heroImg from '../images/restaurant2.jpg'
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned restaurant focused on organic and quality
            products and dishes.
          </p>
          <Link to="/BookingPage">
            <button className="btn">Reserve a table</button>
          </Link>
        </div>
        <img src={heroImg} alt="hero img" />
      </section>
    </>
  )
}

export default Hero
