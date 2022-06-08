import React, { Component} from 'react';
import styled from "styled-components";
import Button from "../components/styled/Button.styled";
import Input from "../components/Inputs/Input";
import H3 from "../components/styled/H3.styled";
import { Colors, TextStyles } from "../Theme";

const FormSection = styled.div`
	padding: 160px 0;
`;

const AppEl = styled.div`
  display: flex;
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

const WelcomeText = styled(H3)`
  margin: 3rem 0 5rem 0;
  color: ${Colors.Brand.Text};
`;

const InputContainer = styled.div`
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 5.5rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Sign up " + userData.username + " " + userData.password);
  };
  

  login = event => {
    fetch('http://127.0.0.1:8000/api/auth/register/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    )
    .catch( error => console.error(error))
  }

  render(){

  
    return (
      <FormSection>
      <AppEl>
        <WelcomeText>Zarejestruj się</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Imię" />
          <Input type="text" placeholder="Email" name="username" 
           value={this.state.username}
           onChange={this.onChange} />
          <Input type="password" placeholder="Hasło" name="password"
           value={this.state.password}
           onChange={this.onChange} />
        </InputContainer>
        <ButtonContainer>
        <Button onClick={this.onLoginClick}>Zarejestruj się</Button>
        </ButtonContainer>
      </AppEl>
      </FormSection>
    );
  }
}

export default Register;