import styled, { css } from "styled-components";
import { useState } from "react";
import Giphy from "./Giphy";
import Hero1 from "../components/Hero/Hero1";

export const Wrapper = styled.div`
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: z-index 1s, transform 1s;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;

  &.flipped {
    z-index: 1;
  }
`
export const CardSide = css`
  width: 100%;
  min-width: 100%;
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

export const CardFront = styled.div`
  ${CardSide};
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0;
  height: 400px;
  width: 240px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
`;

export const CardBack = styled.div`
  ${CardSide}
  transform: rotateY(180deg) translate(100%, 0);
  z-index:1;
  align-items: center;
  justify-content: center;
  margin: 70px 0;
  height: 400px;
  width: 240px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
`;

export const CardInner = styled.div`
  flex: 1;
  display: flex;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;

  &.flipped {
  transform: rotateY(180deg);
  }
`;



const CreateCard = () => {
  const [flipped, setFlipped] = useState(false)
    return (
      <>
        <Hero1 />
      <Wrapper>
      <CardContainer>
        <CardInner className={flipped ? "flipped" : ""}>
          <CardFront onClick = {() => setFlipped(true)}>
            <h2>weekend</h2>
          </CardFront>
          <CardBack onClick = {() => setFlipped(false)}>
            <div>
              <Giphy />
            </div>
          </CardBack>
        </CardInner>
      </CardContainer>
      </Wrapper>
      </>
    );
  }

export default CreateCard;
  