import React, {useState} from 'react'

function HookCounterTwo() {
    const intialCount=0
    const [count, setCount] = useState(intialCount)

    const increment5 = () => {
        for(let i=0;i<5; i++){
            setCount(prevCount => prevCount +1)
        }
    }
  return (
    <div>
        Count: {count}

        <button onClick={() => setCount(intialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
        <button onClick={increment5}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
