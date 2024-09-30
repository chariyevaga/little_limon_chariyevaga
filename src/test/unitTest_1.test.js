import { render, screen } from '@testing-library/react'
import BookingForm from '../components/BookingForm'
import { initializeTimes } from '../components/BookingPage'
import { updateTimes } from '../components/BookingPage'

test('Renders the BookingForm heading', () => {
  const availableTimes = ['17:00', '18:00']
  const setTime = jest.fn()
  const dispatch = jest.fn()
  const submitForm = jest.fn()

  render(
    <BookingForm
      availableTimes={availableTimes}
      setTime={setTime}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  )
  const headingElement = screen.getByText('Booking')
  expect(headingElement).toBeDefined()
})

test('reducer initialized values', () => {
  const result = initializeTimes()

  expect(result.times).not.toHaveLength(0)
})

test('updateTimes return value', () => {
  const initialState = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ]
  const preSelectedDate = new Date('2024-09-29')

  const action = {
    type: 'UPDATE_TIMES',
    payload: preSelectedDate,
  }

  const newState = updateTimes(initialState, action)

  expect(newState.times).not.toEqual([])
})
