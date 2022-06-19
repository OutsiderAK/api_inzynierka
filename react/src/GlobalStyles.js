import { createGlobalStyle } from "styled-components";
import BgImage from "./assets/images/Background.svg";

const GlobalStyle = createGlobalStyle`
  body{
    background: url(${BgImage});
    background-size: cover;
    font-family: 'Montserrat', sans-serif;
  }

*{
  padding: 0;
   margin: 0;
   font-family: 'Montserrat', sans-serif;
}

a{
  text-decoration: none;
}

a:visited{
  color: #010030;
}
   
`;

export default GlobalStyle;