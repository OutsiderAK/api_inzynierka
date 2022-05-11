import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";
import Button from "../styled/Button.styled";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../../Pages/Login";

const HeaderEl = styled.header`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftPart = styled.span`
  display: flex;
  column-gap: 1rem;
`;

const RightPart = styled.span`
  display: flex;
  column-gap: 1rem;
`;


const NavBar = styled.nav`
  display: flex;
  column-gap: 3.5rem;
  align-items: center;
  color: ${Colors.Brand.Text};
  ${TextStyles.Bundler(TextStyles.S1)}
`;
const NavItem = styled.a`
  :visited {
    color: ${Colors.Brand.Text};
  }
`;

export default function Header() {
  return (
    <HeaderEl>
      <LeftPart>
        <NavBar>
          <NavItem href="#">Edukacja</NavItem>
          <NavItem href="#">Kategorie</NavItem>
          <NavItem href="#">Stwórz</NavItem>
        </NavBar>
      </LeftPart>
      <RightPart>
        <NavBar>
          <NavItem href="/Login">Zaloguj się</NavItem>
          <Button>Zarejestruj się</Button>
        </NavBar>
      </RightPart>
    <Router>
       <Routes>
          <Route exact path="/" element={Login} />
       </Routes>
    </Router>
    </HeaderEl>

    
  );
}