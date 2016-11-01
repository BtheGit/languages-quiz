import React from 'react';
import Question from './Question';
import AnswerOptions from './AnswerOptions';

 function QuestionPage(props) {
  
  return (
      <div>
      	<Question question={props.question}/>
       	<AnswerOptions options={props.options} handleAnswerSelected={props.handleAnswerSelected}/>
      </div>
    );
  
}

export default QuestionPage;