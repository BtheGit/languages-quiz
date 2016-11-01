import React from 'react';

//WAITING TO IMPLEMENT SCORE
//<div className="scoreText" id="scoreResults">You had a total score of {props.score}</div>

function ResultPage(props) {

	function determineMessage(score) {
		return score === 10 ? "You are a language god!" : score > 7 ? "You rock!" : score > 5 ? "Not bad for an English Speaker" : score > 3 ? "Nice try but don't forget your guidebook." : score > 0 ? "Well. We can't all be winners." : "You must be American." ;
	}

	return (
		<div >
			<div className="banner"><div id="bannerText">Congratulations!</div></div>
			<div className="resultBox">
					<div className="scoreText" id="countResults">You answered {props.totalCorrect} out of {props.length} questions correctly.</div>
					<div className="scoreText" id="resultMessage">{determineMessage(props.totalCorrect)}</div>
					<img className="scoreText" id="resultAd" alt="Ad" src="http://images.bestbuy.com/BestBuy_US/en_US/images/abn/2011/com/pcon/pm_rosetta_110411.jpg"></img>
					<img className="scoreText" id="facebookShare" alt="fbShare" src="http://cdn-7.swapmyapp.com/wp-content/uploads/2014/05/facebook-twitter-banner-798x350.png"></img>
			</div>
		</div>
	);
}

ResultPage.propTypes = {
	totalCorrect: React.PropTypes.number.isRequired,
	length: React.PropTypes.number.isRequired,
	score: React.PropTypes.number.isRequired
}

export default ResultPage;