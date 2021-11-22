import React, { useState, useEffect } from 'react'

import './Task.scss'

import check from '../img/check24.svg'

import K_TASKS from '../K_TASKS.json'

const Task = ({ active }) => {
  const [activeItem, setActiveItem] = useState(null)
  const [id, setID] = useState('')
  useEffect(
    (li) => {
      console.log(activeItem)
    },
    [id]
  )
  return (
    <div className="task">
      {K_TASKS.K__tasks.map((li) => (
        <div className="task__que">
          <p>{li.name}</p>
          <div key={li.id} className="task__que-li">
            {' '}
            {li.variant.map((que) => (
              <span>
                <div className="checkbox">
                  <input id={que.id} type="checkbox" />
                  <label
                    key={que.id}
                    className={que.completed ? activeItem : ''}
                    htmlFor={que.id}
                    onClick={(item) => {
                      que.completed = !que.completed
                      setActiveItem('active')
                      setID(que.id)
                    }}
                    proverka={que}
                  >
                    <img src={check} alt="ok" />
                  </label>
                </div>
                {que.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Task
