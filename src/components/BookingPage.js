import BookingForm from './BookingForm'
import { useEffect, useReducer, useState } from 'react'
import { fetchAPI, submitAPI } from '../utils/api'
import { useNavigate } from 'react-router-dom'

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = action.payload
      const availableTimes = fetchAPI(new Date(selectedDate))
      return { ...state, times: availableTimes }
    }
    default:
      return state
  }
}

export const initializeTimes = () => {
  const today = new Date()
  return { times: fetchAPI(today) }
}

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const navigate = useNavigate()

  const submitForm = (date, time, guest, occasion) => {
    const result = submitAPI(date, time, guest, occasion)
    if (result) {
      navigate('/confirmBooking')
    }

    console.log(date, time, guest, occasion)
  }

  return (
    <>
      <hr />
      <BookingForm
        availableTimes={availableTimes.times}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  )
}

export default BookingPage
