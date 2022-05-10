import styled from "styled-components";
import Icon from "../../images/icons/04.svg";
import H2 from "../styled/H2.styled";
import H3 from "../styled/H3.styled";
import StatItem from "./StatItem";
import People from "../../images/hm2.svg";
import Img from "../styled/Img.styled";
import { Shadows } from "../../Theme";
import S2 from "../styled/S2.styled";

const Items = [
  { id: 1, icon: Icon, title: "Pierwsza zaleta"},
  { id: 2, icon: Icon, title: "Druga zaleta"},
  { id: 3, icon: Icon, title: "Trzecia zaleta"},
  { id: 4, icon: Icon, title: "Czwarta zaleta" },
];

const StatsEl = styled.article`
  padding: 3rem 7rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Counts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
`;

const Image = styled(Img)`
  filter: drop-shadow(${Shadows.button});
`;

const SubTitle = styled(S2)`
  text-align: center;
`;

export default function Stats() {
  return (
    <StatsEl>
      <Image src = {People} />
      <span><H2>Co my oferujemy</H2>
      <SubTitle>
      jakiś tekst o sposobie  nauki języka migołego na naszej stronie
      </SubTitle>
      </span>
      <Counts>
          {Items.map((item) => {
          return <StatItem key={item.id} item={item} />;
        })}
      </Counts>
    </StatsEl>
  );
}