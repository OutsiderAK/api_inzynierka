import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";
import { Link } from 'react-router-dom';
import Navbar1 from "./DropdownMenu1.js";
import AvatarIcon from "../../images/AvatarIcon.png";
import NavbarUser from "./DropdownMenuUser.js";


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

const AvatartImage = styled.img`
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid ${Colors.Brand.Button};
  `;

export default function HeaderUser() {
  return (
    <HeaderEl>
      <LeftPart>
        <NavBar>
        <Link to="education">
          <NavItem>Edukacja</NavItem>
        </Link>
        <Link to="">
          <NavItem>Kategorie</NavItem>
        </Link>
          <Navbar1 />
        </NavBar>
      </LeftPart>
      <RightPart>
        <NavBar>
          <NavbarUser />		
        </NavBar>
      </RightPart>
    </HeaderEl>
  );
}