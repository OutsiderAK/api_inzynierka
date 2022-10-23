import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Button from "../components/styled/Button.styled";
import Input from "../components/Inputs/Input";
import H3 from "../components/styled/H3.styled";
import { Colors, TextStyles } from "../Theme";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import authSlice from "../store/Auth"; 
import { useFormik } from "formik";


const FormSection = styled.div`
  padding: 4rem 30rem;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;

`;

const AppEl = styled.div`
  display: flex;
  justify-content: center;
  padding:2em;
  align-items: center;
  text-align:center;
  flex-direction: column;
  height: 300px;
  width: 1000px;
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
  margin: 4rem 0 4rem 0;
  color: ${Colors.Brand.Text};
`;

const InputContainer = styled.div`
  row-gap: 1rem;
  padding-top:4em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
  text-color: ${Colors.Brand.Text};
`;

const ButtonContainer = styled.div`
  margin: 3rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  border-color: ${Colors.Brand.Button};
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: ${Colors.Brand.Text};
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #6B10B1;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: ${Colors.Brand.Text};
    font-weight: 100;
    font-size: 1rem;
  }
`;


function Register(){
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory(); 
  const dispatch = useDispatch();
 

  const handleRegister = (text,reverse ) => {
    axios
      .post(`http://127.0.0.1:8000/api/fiszki/`, {text,reverse })
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.token,
            refreshToken: res.data.refresh,
          })
        );
      console.log(res.data)
        dispatch(authSlice.actions.setRegister(res.data.user));
        setLoading(false);
        history.push("/fiszki");
      })
      .catch((err) => {
        console.log(err.res)
        
      });
  };
  const formik = useFormik({
    initialValues: {
      text:"",
      reverse :"",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleRegister(values.text,values.reverse);
    },
  });
  
  return (
    <FormSection>
       <WelcomeText>Stwórz fiszkę</WelcomeText>
      <AppEl>
       
        <form onSubmit={formik.handleSubmit}>
          <InputContainer>
            <StyledInput
              type="text"
              placeholder="text"
              name="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <StyledInput
              type="reverse"
              placeholder="gif"
              name="reverse"
              value={formik.values.reverse}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.reverse ? 
            <div>
              {formik.errors.reverse} 
              </div> : null}
           
          </InputContainer>
          <div className="text-danger text-center my-2" hidden={false}>
            {message}
          </div>
          <ButtonContainer>
            <Button
              type="submit"
              disabled={loading}
              
            >
              Stwórz fiszkę
            </Button>
          </ButtonContainer>

         
          
        </form>
        
      </AppEl>
     
  </FormSection>
  );
}

export default Register;

  