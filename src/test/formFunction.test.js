import {
  fireEvent,
  getByLabelText,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import BookingForm from '../components/BookingForm'

describe('Function validation', () => {
  const availableTimes = ['17:00', '18:00']
  const setTime = jest.fn()
  const submitForm = jest.fn()
  const dispatch = jest.fn()

  render(
    <BookingForm
      availableTimes={availableTimes}
      setTime={setTime}
      submitForm={submitForm}
      dispatch={dispatch}
    />
  )

  test('on correct input', () => {
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: 2 },
    })
    const text = 'Value should be greater than 0'

    expect(screen.queryByText(text)).toBeNull()
  })
})

test('on incorrect input', () => {
  const availableTimes = ['17:00', '18:00']
  const setTime = jest.fn()
  const submitForm = jest.fn()
  const dispatch = jest.fn()

  render(
    <BookingForm
      availableTimes={availableTimes}
      setTime={setTime}
      submitForm={submitForm}
      dispatch={dispatch}
    />
  )

  fireEvent.change(screen.getByLabelText('Number of guests'), {
    target: { value: -2 },
  })
  const text = 'Value should be greater than 0'

  expect(screen.getByText(text)).not.toBeNull()
})
