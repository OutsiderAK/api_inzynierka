import React from 'react';
import data from './data';
import Answers from './Answers';
import Popup from './Popup';
import Button from "../components/styled/Button.styled";
import styled, { ThemeConsumer } from "styled-components";
import H1 from "../components/styled/H1.styled";
import H3 from "../components/styled/H3.styled";
import { Colors, TextStyles } from "../Theme";
import { Link } from 'react-router-dom';
import "./anw.css";


const FormSection = styled.div`

  padding: 1rem 0rem;

`;

const Title = styled(H1)`
  width: 476 px;
  padding-top: 0rem;
  color: ${Colors.Brand.Text};


`;



const SubTitle = styled(H3)`
  margin-top: 1rem;
  padding-bottom: 1s.75rem;
  align-items: center;
  color: ${Colors.Brand.Text};
`;
const AppEl = styled.div`
  display: flex;
  ustify-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 97vh;
  width: 70vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(100rem);
  -webkit-backdrop-filter: blur(100rem);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const ItemContainer = styled.div`
  
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0rem;
  column-gap: 1rem;
  row-gap: 8rem;
`;

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    pushData(nr) {
        this.setState({
            question: data[nr].question,
            answers: [data[nr].answers[0], data[nr].answers[1], data[nr].answers[2], data[nr].answers[3] ],
            correct: data[nr].correct,
            nr: this.state.nr + 1
        });
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    nextQuestion() {
        let { nr, total, score } = this.state;

        if(nr === total){
            this.setState({
                displayPopup: 'flex'
            });
        } else {
            this.pushData(nr);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }

    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    handleStartQuiz() {
        
        this.setState({
            displayPopup: 'none',
            nr: 1
        });
    }

   
    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { nr, total, question, answers, correct, showButton, questionAnswered, displayPopup, score} = this.state;

        return (
            
            <div className="container">
            <FormSection>
                <AppEl>
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                    
                        <div id="question">
                    
                            <Title>Pytanie {nr}/{total}</Title>
                            <SubTitle>{question}</SubTitle>
                        </div>
                        <ItemContainer>
                            <SubTitle><Answers answers={answers} correct={correct} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore}/></SubTitle>
                        </ItemContainer>
                        <ItemContainer>
                            <div id="submit">
                                {showButton ? <Button className="fancy-btn" onClick={this.nextQuestion} >{
                                nr===total ? 'Finish quiz' : 'Next question'}</Button> : null}
                            </div>
                        </ItemContainer>
                                
                        <Popup style={{display: displayPopup}} score={score} total={total} startQuiz={this.handleStartQuiz}></Popup>
                   
                                
                            
                            
                        
                    </div>
                </div>
                </AppEl>
            </FormSection>
        </div>
            
        );
    }
};

export default Quiz;
