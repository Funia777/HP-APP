import React, { useState, useEffect } from 'react'

import '../Task copy/Task.scss'

import K_TASKS from '../K_TASKS.json'

const Task = ({ proverka1 }) => {
  const [id, setID] = useState('')
  useEffect((li) => {}, [id])
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
                    proverka1={id}
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
