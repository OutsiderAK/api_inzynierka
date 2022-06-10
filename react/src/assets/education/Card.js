import styled from 'styled-components';
import { Colors } from '../Theme';
import H3 from "../components/styled/H3.styled";

const Wrapper = styled.article`
  border-radius: 0.5rem;
  background-color: ${Colors.Brand.Blue};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled(H3)`
  margin: 0;
  font-size: 600;
  font-weight: 800;
  color: ${Colors.Brand.Text};
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.h3`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  & > b {
    font-weight: 800;
  }
`;

export const Card = ({ img, title, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};