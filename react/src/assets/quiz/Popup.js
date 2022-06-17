import React from 'react';
import styled from "styled-components";
import Button from "../components/styled/Button.styled";
import H3 from "../components/styled/H3.styled";
import { useLocation } from 'react-router-dom';

import { Colors, TextStyles } from "../Theme";
import "./anw.css";

const ButtonContainer = styled.div`
  margin: 3rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const WelcomeText = styled(H3)`
  margin: 1rem 9 4rem 8s;
  padding: 3%;
  color: ${Colors.Brand.Text};
`;


const AppEl = styled.div`
  display: flex;
  ustify-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(100rem);
  -webkit-backdrop-filter: blur(100rem);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;


class Popup extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Quiz',
            text: 'Spróbuj swoich sił<p> rozwiązując quiz.',
            buttonText: 'Rozpocznij' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
   

    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Gratulacje!',
                buttonText: 'Restart'
                
            });
            
            this.props.startQuiz();
        } else {         
            
            this.props.startQuiz();
        }


    }
 
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'Ukończyłeś quiz <br /> Odpowiadając na: <strong>' + this.props.score + '</strong> z <strong>' +this.props.total +'</strong> pytań poprawnie.'
        })
    }
    
    createMarkup(text) {
        return {__html: text};
    }
    
    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                    
                        <div className="popup">
                        <AppEl>
                            <WelcomeText>
                                <h2>{title}</h2>
                            </WelcomeText>   
                            <WelcomeText><p dangerouslySetInnerHTML={this.createMarkup(text)} /></WelcomeText>
                           
                            <ButtonContainer>
                                <Button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</Button>
                            </ButtonContainer>
                            
                        </AppEl>
                        </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
