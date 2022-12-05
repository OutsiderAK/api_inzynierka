import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";
import Button from "../styled/Button.styled";
import { Link } from 'react-router-dom';
import Navbar1 from "./DropdownMenu.js";


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

export const Logo = styled.a`
  display: flex;
  grid-column:6 / span 1;
  letter-spacing: -0.12rem;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  color: ${Colors.Brand.Text};
`;





export default function Header() {
  return (
    <HeaderEl>
      <LeftPart>
        <NavBar>
        <Link to="createcategory">
          <NavItem>Edukacja</NavItem>
        </Link>
        <Link to="#">
          <NavItem>Kategorie</NavItem>
        </Link>
          <Navbar1 />
        </NavBar>
      </LeftPart>
      <Link to="/">
          <Logo>FJM</Logo>
      </Link>
      <RightPart>
        <NavBar>
          <NavItem href="/login">Zaloguj się</NavItem>
          
						<Link to="register">
							<Button>Zarejestruj się</Button>
						</Link>
					
        </NavBar>
      </RightPart>
    </HeaderEl>
  );
}