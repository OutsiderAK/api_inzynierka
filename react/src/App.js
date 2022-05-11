import styled from "styled-components";
import FeatureM from "./assets/components/Feature/Multiple/FeatureM";
import Hero from "./assets/components/Hero/Hero";
import BgImage from "./assets/images/Background.svg";
import Stats from "./assets/components/Stats/Stats";
import Header from "./assets/components/Header/Header";
import Login from "../src/assets/Pages/Login";
import Register from "../src/assets/Pages/Register";

const AppEl = styled.div`
/*display: flex;*/
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;
flex-direction: column;
`;


function App() {
  return (
    
    <Register />
     
  );
}

export default App;
