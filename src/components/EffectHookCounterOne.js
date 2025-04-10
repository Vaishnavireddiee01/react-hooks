import React, {useState, useEffect} from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      document.title=`clicked ${count} times`;
      
    
    })
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>
            count : {count} </button>
      
    </div>
  )
}

export default HookCounterOne
