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
import { Link } from 'react-router-dom';




const FormSection = styled.div`

  padding: 6rem 30rem;

`;
const Wrapper = styled.div`
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`

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
const WelcomeText = styled(H3)`
  margin: 4rem 0 4rem 0;
  color: ${Colors.Brand.Text};
`;
const InputContainer = styled.div`
  row-gap: 1rem;
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

const ButtonContainer2 = styled.div`
  margin: em 0 2rem 0;
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

function Form(){

  const [loading, setLoading] = useState(false);
  const history = useHistory(); 
  const dispatch = useDispatch();
 

  const handleLogin = (email, password) => {
    axios
      .post(`http://127.0.0.1:8000/api/auth/login/`, { email, password })
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          })
        );
      console.log(res.data)
        dispatch(authSlice.actions.setAccount(res.data.user));
        setLoading(false);
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err.res)
        
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleLogin(values.email, values.password);
    },
  });

  //const handleLogIn = () => {
    //history.push("/home");
  
  return (
    <Wrapper>
    <FormSection>
      <AppEl>
        <WelcomeText>Zaloguj si??</WelcomeText>
        <form onSubmit={formik.handleSubmit}>
          <InputContainer>
            <StyledInput
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email ? 
            <div>
              {formik.errors.email} 
              </div> : null}
            <StyledInput
              type="password"
              placeholder="Has??o"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password ? (
            <div>
              {formik.errors.password} 
            </div>
            ) : null}
          </InputContainer>

          <ButtonContainer>
            <Button type="submit" disabled={loading}>
              Zaloguj si??
            </Button>
          </ButtonContainer>
         
        </form>
        
      </AppEl>
      <div className='zarejestruj'>
            <p>Nie posiadasz konta? </p><Link to="register">
            <ButtonContainer2>
            <Button type="submit" disabled={loading}>
              Zarejestruj si??
            </Button>
          </ButtonContainer2>
						  </Link>
        </div>
  </FormSection>
  </Wrapper>
  );
}

export default Form;

  



 