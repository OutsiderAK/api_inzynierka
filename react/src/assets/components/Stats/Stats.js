import styled from "styled-components";
import Icon from "../../images/icons/04.svg";
import H2 from "../styled/H2.styled";
import H3 from "../styled/H3.styled";
import StatItem from "./StatItem";
import People from "../../images/hm2.svg";
import Img from "../styled/Img.styled";
import S2 from "../styled/S2.styled";
import { Colors, TextStyles, Shadows } from "../../Theme";

const Items = [
  { id: 1, icon: Icon, title: "Pierwsza zaleta"},
  { id: 2, icon: Icon, title: "Druga zaleta"},
  { id: 3, icon: Icon, title: "Trzecia zaleta"},
  { id: 4, icon: Icon, title: "Czwarta zaleta" },
];

const StatsEl = styled.article`
  padding: 2rem 9rem;
  margin-to: 1rem;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
`;

const Counts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 2rem;
  flex: 1;
`;

const Image = styled(Img)`
  filter: drop-shadow(${Shadows.button});
  margin-left: 6rem;
`;

const SubTitle = styled(S2)`
  text-align: center;
  color: ${Colors.Brand.Text};
`;

export default function Stats() {
  return (
    <StatsEl>
      <Image src = {People} />
      <span>
      <H2>Co my oferujemy</H2>
      <Counts>
          {Items.map((item) => {
          return <StatItem key={item.id} item={item} />;
        })}
      </Counts>
      </span>
    </StatsEl>
  );
}