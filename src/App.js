import React, { Component } from 'react';
import './App.css';
import quiz from './components/quizdata';
import ResultPage from './components/ResultPage';
import QuestionPage from './components/QuestionPage';
import StartModal from './components/StartModal';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      options: [], //create function to scramble options
      answer: '',
      answersCorrect: 0,
      finished: false,
      //score: 0 //(create a running score based on how long it took player to guess correctly)
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: quiz[0].question,
      options: this.scrambleAnswers(quiz[0].options),
      answer: quiz[0].correct
    });
  }

  componentDidMount() {
  	  this.renderStartModal();
  }

  handleAnswerSelected(event) {
    this.checkAnswer(event.currentTarget.innerHTML);

    if (this.state.questionId < quiz.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        this.setState({ finished: true})
    }
  }

  checkAnswer(chosenAnswer) {
    if (chosenAnswer === this.state.answer) {
      this.setState ({
        answersCorrect: this.state.answersCorrect + 1
      });
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quiz[counter].question,
        options: this.scrambleAnswers(quiz[counter].options),
        answer: quiz[counter].correct,
    });
  }

  scrambleAnswers(array) {
    //Fischer-Yates Shuffle
    let currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    return array;
  }

  renderStartModal() {
  	return (
  		<StartModal />
  	);
  }

  renderQuiz() {
    return (
		<div>
			<StartModal />
			<QuestionPage 
			question={this.state.question}
			options={this.state.options} 
			handleAnswerSelected={this.handleAnswerSelected}
			nextQuestion={this.setNextQuestion}
			/>
		</div>
    );
  }

  renderResultPage() {

    document.querySelector('html').classList.add("resultPage");

    return (
      <ResultPage 
        totalCorrect={this.state.answersCorrect}
        length={quiz.length}
        score={this.state.score}
      />
    );
  }


  render() {
    return (
      <div id="wholepage">
        {!this.state.finished ? this.renderQuiz() :  this.renderResultPage()}
      </div>
    );
  }
}

export default App;
