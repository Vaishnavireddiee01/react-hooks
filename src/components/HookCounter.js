import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
   // {/* The useState hook returns an array with 
    // two elements: the current state value and
    // a function to update it.(here - currstate indicated with (count)
    // and method/func indicated with(setState) used arrow function in button 
    // to call the func and update count for every click) */}
  return (
    <div>
      <button onClick={() => setCount(count+1)}>count - {count}</button>
    </div>
  )
}

export default HookCounter
