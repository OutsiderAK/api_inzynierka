import styled from "styled-components";
import Header from "../Header/Header";
import Button from "../styled/Button.styled";
import H1 from "../styled/H1.styled";
import H3 from "../styled/H3.styled";
import People from "../../images/hm1.svg";
import Img from "../styled/Img.styled";
import { Colors, TextStyles, Shadows } from "../../Theme";
import { Link } from 'react-router-dom';

const HeroEl = styled.article`
  padding: 0 6.4rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  row-gap: 1.5rem;
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled(H1)`
  width: 476 px;
  margin-top: 1rem;
  padding-top: 3rem;
  color: ${Colors.Brand.Text};
`;
const SubTitle = styled(H3)`
  margin-top: 1rem;
  padding-bottom: 1.75rem;
  color: ${Colors.Brand.Text};
`;

const Image = styled(Img)`
  filter: drop-shadow(${Shadows.button});
`;

export default function Hero() {
    return (
      <HeroEl>
        <Header />
        <Content>
          <span>
            <Title>Fiszki z <br></br>języka migowego</Title>
            <SubTitle>Chcesz nauczyć się języka migowego? Fiszki to najprostsza oraz najskuteczniejsza forma nauki. <br></br>Spróbuj sam!
               
            </SubTitle>
            <Link to="register">
							<Button>Zarejestruj się</Button>
						</Link>
            </span>
            <Image src = {People} />
        </Content>
      </HeroEl>
    );
  }