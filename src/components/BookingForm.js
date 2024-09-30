import { useState } from 'react'
import cat from '../images/bookingMenu.jpg'
const GuestErrorMessage = () => {
  return <p className="fieldError">Value should be greater than 0</p>
}

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState()
  const [guest, setGuest] = useState()
  const [occasion, setOccassion] = useState('')

  const handleDateChange = (event) => {
    const selectedDate = event.target.value
    setDate(selectedDate)
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate })
  }

  const getFormValid = () => {
    return date && guest && time && occasion
  }

  return (
    <>
      <form
        className="bookingForm"
        onSubmit={(e) => {
          e.preventDefault()
          submitForm(time, date, guest, occasion)
        }}
      >
        <h1>Booking</h1>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange} required />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        {guest < 1 ? <GuestErrorMessage /> : null}
        <input
          type="number"
          placeholder=""
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuest(e.target.value)}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => setOccassion(e.target.value)}
          value={occasion}
          required
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          className="submitButton"
          type="submit"
          value="Make Your reservation"
          disabled={!getFormValid()}
          aria-label="on Click"
        />
      </form>
    </>
  )
}

export default BookingForm
