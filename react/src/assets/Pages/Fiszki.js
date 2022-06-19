import { FiszkiCard } from '../education/FiszkiCard';
import styled from "styled-components";
import { List } from '../education/List';
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero1 from '../components/Hero/Hero1';

const Wrapper = styled.main`
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

function Fiszki() {
    

  const [fiszki, setFiszki] = useState([])

  const { push } = useHistory();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/fiszki/')
      .then((response) => {
        console.log(response);
        setFiszki(response.data)
      })
    }, []);
        return(
            <>
            <Hero1 />
            <Wrapper>
              <Container>
        
              <List>
                  {
                    fiszki.map((n) => {
                      const countryInfo = {
                      img: n.reverse,
                      text: n.text,
                      };
                      return (
                        <FiszkiCard
                      key={n.id}
                      onClick={() => push(`/kate/${n.id}`)}
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


export default Fiszki;