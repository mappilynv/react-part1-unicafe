import React, { useState } from 'react'
import Statistics from './Statistics'

const Title = ({ name }) => {
  return (
      <h1>{name}</h1>
  )
}


const Buttons = ({ value, text }) => {
  return (
    <button onClick={value}>{text}</button>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const GoodFeedbackAdd = () => {
    setGood(good + 1)
  }

  const NeutralFeedbackAdd = () => {
    setNeutral(neutral + 1)
  }

  const BadFeedbackAdd = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Title name='Give Feedback' />
      <Buttons value={GoodFeedbackAdd} text='Good' />
      <Buttons value={NeutralFeedbackAdd} text='Neutral' />
      <Buttons value={BadFeedbackAdd} text='Bad' />
      <Title name='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
