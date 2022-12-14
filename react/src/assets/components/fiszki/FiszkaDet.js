import styled, { css } from "styled-components";
import { useState } from "react";
import Giphy from "./Giphy";

const CardContainer = styled.div`
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
const CardSide = css`
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

const CardFront = styled.div`
  ${CardSide};
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 140px 0;
  height: 400px;
  width: 260px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
`;

const CardBack = styled.div`
  ${CardSide}
  transform: rotateY(180deg) translate(100%, 0);
  z-index:1;
  align-items: center;
  justify-content: center;
  margin: 140px 0;
  height: 400px;
  width: 260px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
  display: flex;
`;

const CardInner = styled.div`
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
    );
  }

  export default CreateCard;