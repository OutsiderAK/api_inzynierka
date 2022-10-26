import React from "react";
import styled from "styled-components";
import Cards from "../components/Ranking/Cards";
import Hero1 from "../components/Hero/Hero1";
import H2 from "../components/styled/H2.styled";

const Dashboard = styled.div`
    margin: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-content:flex-start;
    align-items: center;
`;
const Rank = styled(H2)`
    text-align: center;
`;

export default function Ranking() {
    return (
        <>
        <Hero1 />
        <Dashboard>
          <Rank>Ranking</Rank>
        <Cards />
        </Dashboard>
    </>
          
    );
  }