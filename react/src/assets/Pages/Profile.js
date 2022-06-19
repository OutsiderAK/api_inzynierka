import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from "../components/styled/Button.styled";
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from '../components/Profile/FeaturesStyles.js';
import Ranking from '../images/ranking.png';
import Hero1 from '../components/Hero/Hero1';

import Courses from '../components/Profile/Courses.js';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import authSlice from "../store/Auth";
import {RootState} from "../store";
import axios from "axios";
import useSWR from 'swr';
import {UserResponse} from "../types/UserTypes";



const ButtonContainer = styled.div`
  margin: 0rem 0 1rem 0;
  width: 225%;
  height: 100%;
  display: flex;
  align-items: flex;
  justify-content: right;
`;


const Section = styled.section`
	padding: 50px 70px;
	margin: auto;
	width: auto;
	min-width: auto;
	max-width: 1280px;
	height: auto;
	max-height: auto;
	min-height: auto;
`;

const RankButton = styled(Button)`
	margin-top: 16px;
`;

export const Profile = () => {
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
		<>
		<Hero1 />
		<Section>
				<ContentRow>
					<ContentColumn>
						<TextWrapper>
						<ButtonContainer>
        
						<Button onClick={handleLogout} className="rounded p-2 w-32 bg-red-700 text-white">Wyloguj się</Button>

      					</ButtonContainer>
							<TopLine>
							Moje punkty
							</TopLine>
							<Heading>
							  Na którym miejscu jesteś?
							</Heading>
							<Subtitle>
							  Rozwiązuj quizy, zdobywaj punkty i walcz o pierwsze miejsce w rankingu
							</Subtitle>
							<br />
							<RankButton>
							  Zobać ranking
							</RankButton>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn>
						<ImgWrapper>
							<Img
								src={ Ranking }
							/>
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
		</Section>
		<Courses />
		</>
	);
};