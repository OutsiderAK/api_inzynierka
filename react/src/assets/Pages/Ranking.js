import React from "react";
import { useEffect, useState } from "react";
import RankingTable from "../components/RankingTable";
import axios from "axios";
import styled from "styled-components";
import Cards from "../components/Ranking/Cards";
import Hero1 from "../components/Hero/Hero1";
import H2 from "../components/styled/H2.styled";
import Button from '../components/styled/Button.styled';
import {Wrapper, CardContainer, CardInner, CardSide } from './CreateCard';

const Dashboard = styled.div`
    margin: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-content:flex-start;
    align-items: center;
`;
const RankingStyle = styled.div`
  ${CardSide};
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  height: 400px;
  width: 550px;
  padding:2em 4em;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
`;

const Rank = styled(H2)`
    text-align: center;
`;

export default function Ranking() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/au/?q=${query}`);
        setData(res.data);
      };
      if (query.length === 0 || query.length > 1) fetchData();
    }, [query]);
    return (
        <>
        <Hero1 />
        <Dashboard>
          <Rank>Ranking</Rank>
        <Cards />
        </Dashboard>
        <Wrapper>
      <CardContainer>
        <CardInner>
          <RankingStyle>
          {<RankingTable data={data} />}
          </RankingStyle>
        </CardInner>
      </CardContainer>
      </Wrapper>
    </>
          
    );
  }