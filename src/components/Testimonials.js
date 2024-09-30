import profile1 from '../images/profile1.jpg'
import profile2 from '../images/profile2.jpg'
import profile3 from '../images/profile3.jpg'

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="testimonials-header">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonials-item">
            <h3>⭐⭐⭐</h3>
            <div className="testimonial-detail">
              <img src={profile1} alt="profile1" />
              <h3>Paw</h3>
            </div>
            <p>Excellent food with great paw service💞</p>
          </div>
          <div className="testimonials-item">
            <h3>⭐⭐⭐⭐</h3>
            <div className="testimonial-detail">
              <img src={profile2} alt="profile2" />
              <h3>Mr. Bright</h3>
            </div>
            <p>The location was perfect for my eyes🤩</p>
          </div>
          <div className="testimonials-item">
            <h3>⭐⭐⭐⭐</h3>
            <div className="testimonial-detail">
              <img src={profile3} alt="profile3" />
              <h3>Grumpy</h3>
            </div>
            <p>Made a smile in my grumpy face🥹</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
