import React, {useState, useEffect} from 'react'

const useUpdate = (fn, dep) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(x => x + 1)
  }, [dep])

  useEffect(() => {
    if (count > 1) {
      fn()
    }
  }, [count])
}

const App = props => {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(n + 1)
  }

  useUpdate(() => {
    console.log('n变了我就执行，但是第一次不执行')
  }, n)

  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App
