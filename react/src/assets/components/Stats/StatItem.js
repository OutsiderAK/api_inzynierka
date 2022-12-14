import styled from "styled-components";
import H4 from "../styled/H3.styled";
import Body from "../styled/S2.styled";
import Img from "../styled/Img.styled";

const StatItemEl = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
`;

export default function StatItem({ item }) {
  const { icon, title, text } = item;
  return (
    <StatItemEl>
      <Img src={icon} />
      <span>
        <H4>{title}</H4>
        <Body>{text}</Body>
      </span>
    </StatItemEl>
  );
}