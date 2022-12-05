import styled from "styled-components";
import Icon from "../../images/icons/04.svg";
import H2 from "../styled/H2.styled";
import H3 from "../styled/H3.styled";
import StatItem from "./StatItem";
import People from "../../images/hm2.png";
import Img from "../styled/Img.styled";
import S2 from "../styled/S2.styled";
import { Colors, TextStyles, Shadows } from "../../Theme";

const Items = [
  { id: 1, icon: Icon, title: "Gotowe fiszki do nauki"},
  { id: 2, icon: Icon, title: "Tworzenie własnych fiszek"},
  { id: 3, icon: Icon, title: "Platformę edukacyjną"},
  { id: 4, icon: Icon, title: "Quizy oraz ranking"}
]

const StatsEl = styled.article`
  padding: 2rem 9rem;
  margin-to: 1rem;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Counts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 1rem;
  flex: 1;
`;

const Image = styled(Img)`
  filter: drop-shadow(${Shadows.button});
  margin-left: 1.5rem;
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