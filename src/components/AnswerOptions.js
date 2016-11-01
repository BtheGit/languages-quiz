import React from 'react';

function AnswerOptions(props) {

	return (

		<div className="scale">
          <div onClick={props.handleAnswerSelected} className="answer one" id={props.options[0]}>{props.options[0]}</div>
          <div onClick={props.handleAnswerSelected} className="answer two" id={props.options[1]}>{props.options[1]}</div>
          <div onClick={props.handleAnswerSelected} className="answer three" id={props.options[2]}>{props.options[2]}</div>
          <div onClick={props.handleAnswerSelected} className="answer four" id={props.options[3]}>{props.options[3]}</div>
        </div>
	);
}

AnswerOptions.propTypes = {
	options: React.PropTypes.array.isRequired
};

export default AnswerOptions;