import React, { useEffect } from 'react';
import styled from 'styled-components';
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
import Button from '../components/styled/Button.styled.js';
import Courses from '../components/Profile/Courses.js';


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

export const ProfileEx = () => {
	return (
		<>
		<Section>
				<ContentRow>
					<ContentColumn>
						<TextWrapper>
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