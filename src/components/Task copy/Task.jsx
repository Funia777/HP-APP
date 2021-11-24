import React, { useState, useEffect } from 'react'

import './Task.scss'

import S_TASKS from '../S_TASKS.json'

const Task = ({ proverka }) => {
  const [id, setID] = useState('')
  useEffect((li) => {}, [id])
  return (
    <div className="task">
      {S_TASKS.S__tasks.map((li) => (
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
                    className={que.completed ? 'active' : ''}
                    htmlFor={que.id}
                    onClick={(item) => {
                      li.variant.map((ques) => {
                        ques.completed = false
                      })
                      que.completed = !que.completed
                      setID(que.id)
                      console.log(que)
                    }}
                    proverka={id}
                  ></label>
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
