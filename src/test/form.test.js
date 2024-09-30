import {
  fireEvent,
  getByLabelText,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import BookingForm from '../components/BookingForm'

describe('Input field validation', () => {
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

  test('form validation and submission', async () => {
    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: '2024-09-03' },
    })

    fireEvent.change(screen.getByLabelText('Choose time'), {
      target: { value: '17:00' },
    })

    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '2' },
    })

    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: { value: 'Birthday' },
    })

    fireEvent.click(
      screen.getByRole('button', { value: /Make Your reservation/ })
    )

    expect(submitForm).toHaveBeenCalledTimes(1)
  })
})
