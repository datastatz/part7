import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  // avoid spreading `reset` into <input>
  return {
    inputProps: {
      type,
      value,
      onChange,
    },
    reset
  }
}
