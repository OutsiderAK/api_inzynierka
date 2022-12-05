import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown.js";
import { Colors, TextStyles } from "../../Theme";
import { Link } from 'react-router-dom';
import AvatarIcon from "../../images/AvatarIcon.png";


const Container = styled.div`
  display: flex;
  justify-content: flex-end;
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

const AvatartImage = styled.img`
  cursor: pointer;
  border-radius: 100px;
  border: 2px solid ${Colors.Brand.Button};
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
          render={toggleShow => <AvatartImage src={AvatarIcon} width="44px" onClick={toggleShow} />}
          position={{
            top: "48px",
          }}
        >
          {toggleShow => (
            <Menu>
              <Link to="profile">
                <MenuItem onClick={() => this.handleClick(toggleShow)}>
                  Profil
                </MenuItem>
              </Link>
              <Link to="findUser">
                <MenuItem onClick={() => this.handleClick(toggleShow)}>
                  Dodaj znajomego
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