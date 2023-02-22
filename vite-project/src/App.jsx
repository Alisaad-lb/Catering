import { useState } from 'react'

import './App.css'
import Test from './Components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>hello</h1>
     <Test />
    </div>
  )
}

export default App
