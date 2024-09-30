import greekSalad from '../images/greek salad.jpg'
import bruschetta from '../images/bruchetta.jpg'
import lemon from '../images/lemon dessert.jpg'
import { useNavigate } from 'react-router-dom'

const Highlights = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="specials">
        <div className="specials-header">
          <h2>Specials</h2>
          <button onClick={() => navigate('/menu')} className="btn online-menu">
            Online Menu
          </button>
        </div>

        <div className="specials-grid">
          <div className="specials-item">
            <img src={greekSalad} alt="greeksalad" />
            <h3>Greek salad</h3>
            <p>$12.99</p>
            <p>The famous greek salad of lettucces</p>
            <button onClick={() => navigate('/order')} className="btn">
              Order Delivery
            </button>
          </div>
          <div className="specials-item">
            <img src={bruschetta} alt="bruschetta" />
            <h3>Bruschetta</h3>
            <p>$5.99</p>
            <p>The famous Bruschetta</p>
            <button onClick={() => navigate('/order')} className="btn">
              Order Delivery
            </button>
          </div>
          <div className="specials-item">
            <img src={lemon} alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>$15.00</p>
            <p>The famous Lemon Dessert</p>
            <button onClick={() => navigate('/order')} className="btn">
              Order Delivery
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights
