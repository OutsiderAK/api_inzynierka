import styled from "styled-components";
import Icon1 from "../../../images/icons/01.svg";
import Icon2 from "../../../images/icons/02.svg";
import Icon3 from "../../../images/icons/03.svg";
import H2 from "../../styled/H2.styled";
import S2 from "../../styled/S2.styled";
import FeatureItem from "./FeatureItem";

const Items = [
    {
      id: 1,
      icon: Icon1,
      title: "Ucz się",
      text: "jakiś tekst o sposobie  nauki języka migołego na naszej stronie",
    },
    {
      id: 2,
      icon: Icon2,
      title: "Ćwicz",
      text: "jakiś tekst o sposobie  nauki języka migołego na naszej stronie",
    },
    {
      id: 3,
      icon: Icon3,
      title: "Wzrastaj",
      text: "jakiś tekst o sposobie  nauki języka migołego na naszej stronie",
    },
];

const FeatureMEl = styled.article`
  padding: 10rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled(S2)`
  text-align: center;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem;
  column-gap: 2rem;
  row-gap: 3rem;
`;

export default function FeatureM() {
  return (
    <FeatureMEl>
      <H2>Co my oferujemy</H2>
      <SubTitle>
      jakiś tekst o sposobie  nauki języka migołego na naszej stronie
      </SubTitle>
      <ItemContainer>
        {Items.map((item) => {
          return <FeatureItem key={item.id} item={item} />;
        })}
      </ItemContainer>
    </FeatureMEl>
  );
}