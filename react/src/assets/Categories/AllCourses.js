import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../components/Profile/CoursesData';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
} from '../components/Profile/CoursesStyled';
import { Colors } from '../Theme';
import H1 from '../components/styled/H1.styled';
import H3 from '../components/styled/H3.styled';
import Button from '../components/styled/Button.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {addCategory} from "./CategoriesRedux";
import {  useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { CategoryCard } from '../education/CategoryCard';


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

export  const AllCategories = () => {
	const [sliderRef, setSliderRef] = useState(null);
	const [categories, setCategories] = useState([]);
	const { push } = useHistory();
	const dispatch = useDispatch();
	
	useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/category/')
        .then((response) => {
        setCategories(response.data)
      })
    }, []);

	return (
		<Section  inverse>
			<Row>
				<Heading inverse>
					Kategorie
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#010030' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{categories.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.img} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						{/* <CoursesButton onClick={() => dispatch(addCategory({...el}))}>Dodaj</CoursesButton> */}
						
						<Link to="/category/${el.id}`)">
							<CoursesButton onClick={() => dispatch(addCategory({...el}))}>Dodaj</CoursesButton>
						</Link>
						{/* <CategoryCard
                      key={el.id}
                      onClick={() => push(`/category/${el.id}`)}
                      
                    /> */}
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export const AllCourses = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section  inverse>
			<Row>
				<Heading inverse>
					Kursy
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
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<Link to="/fiszki"><CoursesButton>Dodaj</CoursesButton></Link>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};