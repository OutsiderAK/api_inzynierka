import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './CoursesData';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
} from './CoursesStyled';
import { Colors } from '../../Theme';
import H1 from '../styled/H1.styled';
import H3 from '../styled/H3.styled';
import Button from '../styled/Button.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Heading = styled(H1)`
	color: ${Colors.Brand.Text};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: auto;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem;
	width: auto;
	min-width: auto;
	max-width: auto;
	height: auto;
	max-height: auto;
	min-height: auto;
	flex-wrap: wrap;
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

const TextWrapper = styled(H3)`
`;

const CoursesButton = styled(Button)`
	margin-top: 8px;
`;

const Courses = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section  inverse>
			<Row>
				<Heading inverse>
					Moje Kursy
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#010030' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						
						<Link to="/fiszki"><CoursesButton>Ucz się</CoursesButton></Link>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Courses;