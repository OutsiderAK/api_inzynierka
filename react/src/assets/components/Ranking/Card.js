import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Radialbar.css";
import { Colors } from '../../Theme';

const CardWrapper = styled.div`
    display: flex;
    flex: 1;
    height: 7rem !important;
    color: ${Colors.Brand.Text};
    padding-left: 6rem;
    padding-right: 6rem;
    position: relative;
    cursor: pointer;
    align-items: center;
    font-weight: bold;
`;
const Radialbar = styled.div`
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
`;


const Card = (props) => {
    return (
        <CardWrapper>
          <Radialbar>
            <CircularProgressbar
              value={props.barValue}
              maxValue={props.maxValue}
              text={`${props.barValue}`}
            />
            <span>{props.title}</span>
          </Radialbar>
        </CardWrapper>
      );
}



  export default Card;