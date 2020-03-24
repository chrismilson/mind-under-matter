import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { physicalToMental, mentalToPhysical } from './age'
import './index.css'
import Graph from './Graph'

const App: React.FC = () => {
  /** Current physical age */
  const [age, setAge] = useState(moment().diff(moment([1958, 9, 2]), 'years'))

  /** Current mental age */
  const mentalAge = physicalToMental(age)

  return (
    <div className="App">
      <div className="inputs">
        <div className="physical age">
          <label htmlFor="physical">Physical Age</label>
          <input
            id="physical"
            type="number"
            value={age}
            onChange={e => setAge(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="mental age">
          <label htmlFor="mental">Mental Age</label>
          <input
            id="mental"
            type="number"
            value={mentalAge}
            onChange={e => setAge(mentalToPhysical(parseInt(e.target.value)))}
          />
        </div>
      </div>
      <Graph highlight={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
