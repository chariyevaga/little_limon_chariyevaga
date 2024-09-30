import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Login from './components/Login'
import Order from './components/Order'
import BookingPage from './components/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlights />
              <Testimonials />
              <About />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/confirmBooking" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
