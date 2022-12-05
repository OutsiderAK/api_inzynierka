import styled from "styled-components";
import ButtonT from "../../styled/ButtonT.styled";
import Body from "../../styled/S2.styled";
import Img from "../../styled/Img.styled";

const FeatureItemEl = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const Text = styled(Body)`
  text-align: center;
`;

export default function FeatureItem({ item }) {
  const { icon, title, text } = item;
  return (
    <FeatureItemEl>
      <Img src={icon} />
      <ButtonT>{title}</ButtonT>
      <Text>{text}</Text>
    </FeatureItemEl>
  );
}