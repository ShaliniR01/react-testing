import React, { useState } from 'react'

export default function AsyncCounter() {
    const [count,setCount] = useState(0)

    const increment = () => {
        setTimeout(() => {
            setCount(count+1)
        }, 500);
    }

  return (
    <div>
        <h1>{count}</h1>
      <button data-testid='up-button' onClick={increment}>Increment</button>
    </div>
  )
}

