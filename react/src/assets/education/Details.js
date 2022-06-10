import styled from "styled-components";
import H1 from "../components/styled/H1.styled";
import S1 from "../components/styled/S1.styled";
import { Colors } from "../Theme";
import { useHistory, useParams } from 'react-router-dom';

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
const SubTitle = styled(S1)`
  margin-top: 1rem;
  padding-bottom: 1.75rem;
  color: ${Colors.Brand.Text};
`;

export const Details =() => {
    const { title, content } = useParams();
    return (
        <HeroEl>
        <Content>
          <span>
            <Title>{title}</Title>
            <SubTitle>
            {content}
            </SubTitle>
            </span> 
        </Content>
      </HeroEl>
    );
};