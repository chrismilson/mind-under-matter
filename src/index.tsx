import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { physicalToMental, mentalToPhysical } from './age'
import './index.css'

const App: React.FC = () => {
  /** Current physical age */
  const [age, setAge] = useState(moment().diff(moment([1958, 9, 2]), 'years'))

  /** Current mental age */
  const mentalAge = physicalToMental(age)

  return (
    <div className="App">
      <input
        type="number"
        value={age}
        onChange={e => setAge(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        value={mentalAge}
        onChange={e => setAge(mentalToPhysical(parseInt(e.target.value)))}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
