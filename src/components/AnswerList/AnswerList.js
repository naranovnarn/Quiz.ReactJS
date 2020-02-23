import React from 'react'
import classes from './AnswerList.module.css'
import AnswerItem from './AnswerItem'

const AnswerList = props => { 
  
  return(
  <ul className={classes.AnswerList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem 
          state={props.state ? props.state[answer.id] : null}
          key={index} 
          answers={answer}
          onAnswerClick={props.onAnswerClick}
        />
      )
    })}
  </ul>
)}

export default AnswerList