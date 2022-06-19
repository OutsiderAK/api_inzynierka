import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown.js";
import { Colors, TextStyles } from "../../Theme";
import { Link } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled.a`
   cursor: pointer;
   
  :visited {
    color: ${Colors.Brand.Text};
  }
`;


const Menu = styled.div`
  position: center;
  width: 200px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(64, 80, 108, 0.2),
    0 0 24px -1px rgba(64, 80, 108, 0.2);
  border-radius: 8px;

  
`;

const MenuItem = styled.div`
  padding: 16px;
  ${TextStyles.Bundler(TextStyles.S1)}
  color: ${Colors.Brand.Text};
  line-height: 1;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(64, 80, 108, 0.1);
  }

  &:hover {
    background-color: rgba(245, 246, 248, 0.5);
    color:${Colors.Brand.Button};
  }
`;

export default class Navbar1 extends React.Component {
  handleClick = callback => {
    console.log("MenuItem click");
    callback();
  };

  render() {
    return (
      <Container>
        <Dropdown
          render={toggleShow => <NavItem onClick={toggleShow}>Stwórz</NavItem>}
          position={{
            top: "48px",
          }}
        >
          {toggleShow => (
            <Menu>
              <Link to="createcategory">
                <MenuItem onClick={() => this.handleClick(toggleShow)}>
                  Fiszka
                </MenuItem>
              </Link>
              <Link to="createcategory">
                <MenuItem onClick={() => this.handleClick(toggleShow)}>
                   Kategoria
                </MenuItem>
              </Link>
            </Menu>
          )}
        </Dropdown>
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Navbar1 />, rootElement);