import React from 'react'

import Task from './components/Task/Task.jsx'
import TaskS from './components/Task copy/Task.jsx'
import Butt from './components/Button/Button.jsx'

import './index.scss'

function App({ active }) {
  return (
    <div className="victor">
      <div className="victor__head">
        <p>Our Happy Birthday</p>
      </div>
      <div className="victor__body">
        <div className="victor__body-sasha">
          <h1>Саша</h1>
          <TaskS setProverka={active} />
        </div>
        <div className="victor__body-kirill">
          <h1>Кирилл</h1>
          <Task setProverka={active} />
        </div>
      </div>
      <div className="victor__footer">
        <Butt />
      </div>
    </div>
  )
}

export default App
