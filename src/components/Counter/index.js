import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [countDouble, setCountDouble] = useState(0)

    const handleIncrement = (val) => {
        setCount(count + val)
    }

    const handleDecrement = (val) => {
        setCount(count - val)
    }

    useEffect(()=>{
        setCountDouble(count * 2)
    }, [count])

    return (
    <div>
        <h1>Counter</h1>
        <h4>Count = {countDouble}</h4>
        <button className='btn btn-danger' onClick={() => handleDecrement(100)}>MINUS ULTRA!</button>
        <p>{count}</p>
        <button className='btn btn-danger' onClick={() => handleIncrement(10)}>PLUS ULTRA!</button>
    </div>
  )
}

export default Counter