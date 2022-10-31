import styled from "styled-components";
import HeaderUser from "./Header/HeaderUser";

const Wrapper = styled.article`
  padding: 0 6.4rem;
  display: flex;
  flex-direction: column;
  width: 89;
  background-repeat: no-repeat;
  background-size: cover;
  row-gap: 1.5rem;
`;

export default function Navbar() {
    return (
        <Wrapper>
            <HeaderUser />
        </Wrapper>
    );
  }