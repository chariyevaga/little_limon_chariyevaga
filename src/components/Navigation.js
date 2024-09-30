import img from '../images/Logo.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="navMenu">
          <li>
            <Link to="/">
              <img src={img} alt="no prop" />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/BookingPage">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
