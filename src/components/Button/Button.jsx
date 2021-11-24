import React, { useState, useEffect } from 'react'

import './Button.scss'

import restart from '../img/restart_alt_black_24dp.svg'
import vivo from '../img/Comp 1.mp4'

import K_TASKS from '../K_TASKS.json'
import S_TASKS from '../S_TASKS.json'

import ktask from '../Task/Task'
import stask from '../Task copy/Task'

function Button({ proverka, proverka1 }) {
  let k = 0
  let s = 0
  const otvet = (s1, k1) => {
    if (s1 === 5 && k1 === 5) {
      setOt(
        <span>
          <p>Молодец , ты ответил на все вопросы правильно </p>
          <p>Вот секретный код HPEP2021</p>{' '}
          <p>Ну и вот тут ты можешь посмотреть ,что тебя ожидает</p>
          <video
            src={vivo}
            width="500px"
            height="500px"
            type="video/mp4"
            controls
          />
        </span>
      )
    } else if (s1 >= 4 && k1 >= 4) return 'Почти все правильно'
    else {
      setOt(<span>Попробуй еще раз</span>)
    }
  }
  useEffect(() => {}, [proverka, proverka1])
  const [visible, setVisible] = useState(false)
  const [ot, setOt] = useState('Попробуй еще раз')
  return (
    <div className="butt">
      {!visible && (
        <button
          onClick={(item) => {
            setVisible(true)

            k = 0
            s = 0
            K_TASKS.K__tasks.map((li) => {
              li.variant.map((que) => {
                if (que.completed) {
                  if (que.proverka) {
                    k = k + 1
                  }
                }
              })
            })
            S_TASKS.S__tasks.map((li) => {
              li.variant.map((que) => {
                if (que.completed) {
                  if (que.proverka) {
                    s = s + 1
                  }
                }
              })
            })
            otvet(s, k)
          }}
        >
          Проверить ответы
        </button>
      )}
      {visible && (
        <div className="butt__visible">
          {ot}
          <img
            src={restart}
            alt="re"
            onClick={() => {
              setVisible(false)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Button
