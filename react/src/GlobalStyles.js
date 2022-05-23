import { createGlobalStyle } from "styled-components";
import BgImage from "./assets/images/Background.svg";

const GlobalStyle = createGlobalStyle`
  body{
    background: url(${BgImage});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
  }

*{
  padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
}

a{
  text-decoration: none;
}

a:visited{
  color: #070710;
}
   
`;

export default GlobalStyle;