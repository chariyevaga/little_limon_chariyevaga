import { Link } from 'react-router-dom'
import footerimg from '../images/littleLogo.png'
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-grid">
          <div className="footer-item">
            <img src={footerimg} alt="footer img" />
          </div>
          <div className="footer-item">
            <h4>Navigation</h4>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/menu">
              <p>Menu</p>
            </Link>
            <Link to="/reservation">
              <p>Reservation</p>
            </Link>
            <Link to="/order">
              <p>Order Online</p>
            </Link>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
          <div className="footer-item">
            <h4>Contact</h4>
            <p>W Madison St, Chicago</p>
            <p>000-222-333</p>
            <p>littlelemon@email.com</p>
          </div>
          <div className="footer-item">
            <h4>Links</h4>
            <p>
              <a
                href="https://unsplash.com/photos/brown-and-white-long-fur-cat-with-red-ribbon-GNVn_4bC2kk"
                target="_blank"
                rel="noreferrer noopener"
              >
                Address
              </a>
            </p>
            <p>
              <a
                href="https://unsplash.com/photos/white-and-brown-tabby-kittens-vmFEBIEz0hQ"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </p>
            <p></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
