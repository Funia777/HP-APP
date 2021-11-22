import React, { useState } from 'react'

import Task from './components/Task/Task.jsx'
import TaskS from './components/Task copy/Task.jsx'

import './index.scss'

function App({ active }) {
  const [proverka, setProverka] = useState(true)
  const footer = (active) => {
    if (proverka) {
      setProverka(active)
    }
    return footer
  }
  return (
    <div className="victor">
      <div className="victor__head">
        <p>Our Happy Birthday</p>
      </div>
      <div className="victor__body">
        <div className="victor__body-sasha">
          <p>Саша</p>
          <TaskS setProverka={active} />
        </div>
        <div className="victor__body-kirill">
          <p>Кирилл</p>
          <Task setProverka={active} />
        </div>
      </div>
      <div className="victor__footer">
        <button>Проверить ответы</button>
      </div>
    </div>
  )
}

export default App
