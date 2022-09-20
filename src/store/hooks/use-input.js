import { useState } from 'react'

const useInput = (validateValue) => {
  const [value,setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  let valueIsValid = validateValue(value)
  let hasError = !valueIsValid && isTouched
  const valueChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setIsTouched(false)
    setValue('')
  }

  return {
    value,
    valueChangeHandler,
    valueIsValid,
    inputBlurHandler,
    hasError,
    reset,
  }
}
export default useInput