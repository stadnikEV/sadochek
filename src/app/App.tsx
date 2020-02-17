import React, { useState } from 'react'

const App: React.FC = () => {
  const [input, setInput] = useState('state')


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <input
      onChange={onChange}
      value={input}
      type="text"
    />
  )
}

export default App
