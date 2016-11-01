import React from 'react';

function Question (props) {

	return (
		<div className="questionContainer">
			<div id="questionText">{props.question}</div>
		</div>
	);
}

Question.propTypes = {
  question: React.PropTypes.string.isRequired,
};

export default Question;