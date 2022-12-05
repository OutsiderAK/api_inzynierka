import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Hero1 from '../components/Hero/Hero1';
import styled from "styled-components";
import Button from '../components/styled/Button.styled';

export const Wrapper = styled.div`
    background-size: cover;
    display: flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
    padding: 8em;
    margin: 0;
    box-sizing: border-box;
    `;

    export const CategorySide = styled.div`
    padding:2em;
 text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
`;
export const CategoryImage = styled.div`
   width:100%;
   img{
    max-width:300px;
   }
  
    `;
const ButtonContainer = styled.div`
  margin: -1.5rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const searchByCategory = (id) => 'http://127.0.0.1:8000/api/category/' + id;

export const Category = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [category, setCategory] = useState([]);

  console.log(category);

  useEffect(() => {
    axios.get(searchByCategory(id)).then(({ data }) => setCategory(data[0]));
  }, [id]);

  return (
    <>
        <Hero1 />
        <Wrapper> <CategorySide><h2>{category.title}</h2>
            <CategoryImage><img src={category.img}/></CategoryImage></CategorySide></Wrapper>
      </>
  );
};