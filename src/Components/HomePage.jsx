import React, {useState} from 'react'


const HomePage = () => {
  const [counter, setCounter] = useState(0)

  const handlePlusClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>
        <h3>{counter}</h3>
      </div>
      <div>
        <button>-</button>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </div>
    )
}

export default HomePage