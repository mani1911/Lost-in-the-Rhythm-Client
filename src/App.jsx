import { useState } from 'react'
import classes from './index.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes.app}>
      <p className={classes.title}>Lost in The Rhythm</p>
    </div>
  )
}

export default App
