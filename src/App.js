import React, { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {
  console.log(props, 'statsiline')
  return(
 <tr><td>{props.text} {props.number}</td></tr>
  )
}




const Statistics = (props) => {
 
  const all = props.good + props.neutral + props.bad
  const avg = props.good/(props.counter-props.neutral)*100
  const avarage = (props.good-props.bad)/props.counter

  if(props.good !== 0){
  return ( 
    <>
         <h2>statistics</h2><table><tbody> 
      <StatisticLine text={'Good:'} number={props.good}/>
      <StatisticLine text={'Neutral:'} number={props.neutral}/>
      <StatisticLine text={'Bad:'} number={props.bad}/>
      <StatisticLine text={'All:'} number={all}/>
      <StatisticLine text={'Positive:'} number={avg}/>
      <StatisticLine text={'Avarage:'} number={avarage}/></tbody></table>
   </>
  )
  
}return <div><h2>No feedback given</h2></div>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)

 
  

  const clicked = () => {
    console.log('clicked')
    setGood(good+1)
    setCounter(counter+1)
  }
  const clicked2 = () => {
    console.log('clicked2')
    setNeutral(neutral+1)
    setCounter(counter+1)
  }
  const clicked3 = () => {
    setBad(bad+1)
    setCounter(counter+1)
  }

  

  return (
    <>
      <h2>Give feedback</h2>
      
   <Button handleClick={clicked} text={'good'}/>
   <Button handleClick={clicked2} text={'neutral'}/>
   <Button handleClick={clicked3} text={'bad'}/>
 
  
   <Statistics counter={counter} good={good} neutral={neutral} bad={bad}/>
  
  </>
  )
}

export default App