import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import styled from "styled-components";
import { Colors, TextStyles } from "../Theme";
//import {fetcher} from "../utils/Axios";
import {UserResponse} from "../types/UserTypes";
import authSlice from "../store/Auth";
import {RootState} from "../store";
import axios from "axios";
import Button from "../components/styled/Button.styled";



const ButtonContainer = styled.div`
  margin: 0rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: flex;
  justify-content: right;
`;

const Profile = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = account?.id;

  const user = useSWR<UserResponse>(`/user/${userId}/`,axios)

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    history.push("/login");
  };
  return (

   
    <div className="w-full h-screen">

      <h1> HEEELOOO</h1>
      <Link to="/quiz">
				<Button>Quiz</Button>
			</Link>

      <ButtonContainer>
        
        <Button
          onClick={handleLogout}
          className="rounded p-2 w-32 bg-red-700 text-white"
        >
          Wyloguj się
        </Button>

      </ButtonContainer>

        {
            user.data ?
                <div className="w-full h-full text-center items-center">
                    <p className="self-center my-auto">Welcome, {user.data?.username}</p>
                </div>
                :
                <p className="text-center items-center">Loading ...</p>
        }
    
    </div>

  );
};

export default Profile;