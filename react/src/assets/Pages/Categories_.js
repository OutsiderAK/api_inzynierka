import { CategoryCard } from '../education/CategoryCard';
import styled from "styled-components";
import { List } from '../education/List';
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero1 from '../components/Hero/Hero1';
import Button from '../components/styled/Button.styled';
import { Link } from 'react-router-dom';

const Wrapper = styled.main`
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

function Test() {
    

  const [categories2, setCategories2] = useState([])

  const { push } = useHistory();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/category/')
      .then((response) => {
        console.log(response);
        setCategories2(response.data)
      })
    }, []);

    console.log(categories2)

        return(
            <>
            <Hero1 />
            <Wrapper>
              <Container>
        
              <List>
                  {
                    categories2.map((n, index) => {
                      const countryInfo = {
                      title: n.title,
                      img: n.img,
                      };
                      return (
                        <CategoryCard
                      key={index}
                      onClick={() => push(`/category/${index+1}`)}
                      {...countryInfo}
                    />
                     );
                })}
              </List>
              </Container>
              </Wrapper>
              
              </>

        );
    }


export default Test;