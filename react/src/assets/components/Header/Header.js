import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";
import Button from "../styled/Button.styled";
import { Link } from 'react-router-dom';
import Navbar1 from "./DropdownMenu.js";
import Navbar2 from "./Dropdowncategory.js";


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


export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;



export default function Header() {
  return (
    <HeaderEl>
      <LeftPart>
        <NavBar>
          <NavItem href="#">Edukacja</NavItem>
         
          <Navbar2 />
          <Navbar1 />
          
        </NavBar>
      </LeftPart>
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