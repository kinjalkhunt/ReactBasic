import React, { useState } from 'react'

function useCount() {

    const [count, setCount] = useState(0);
        const handleCount = () => {
            setCount(count + 1);
        }
  return [count, handleCount]
}

export default useCount
