import React, {useState, useEffect} from 'react'

const App = props => {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(n + 1)
  }

  useEffect(() => {
    console.log('只要变了我就执行')
  })

  useEffect(() => {
    console.log('我只执行一次')
  }, [])

  useEffect(() => {
    console.log('n变了我就执行')
  }, [n])

  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App
