import React from "react";
import styled from "styled-components";
import { cardsData } from "./RankingData";
import Card from "./Card";

const CardsWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    padding: 2 rem;
`;
const ParentContainer = styled.div`
    width: 100%;
`;

export default function Cards()  {
    return (
    <CardsWrapper>
      {cardsData.map((card, id) => {
        return (
          <ParentContainer key={id}>
            <Card
              title={card.title}
              barValue={card.barValue}
            />
          </ParentContainer>
        );
      })}
    </CardsWrapper>
  );
};
