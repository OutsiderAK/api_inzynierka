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
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CardTitle = styled(H3)`
  margin: 0;
  font-size: 600;
  font-weight: 800;
  color: ${Colors.Brand.Text};
`;



export const CategoryCard = ({ title, img, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </Wrapper>
  );
};