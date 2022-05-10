import styled from "styled-components";
import FeatureM from "./assets/components/Feature/Multiple/FeatureM";
import Hero from "./assets/components/Hero/Hero";
import BgImage from "./assets/images/Background.svg";
import Stats from "./assets/components/Stats/Stats";

const AppEl = styled.div`
/*display: flex;*/
background: url(${BgImage});
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;
flex-direction: column;
`;


function App() {
  return (
    <AppEl>
    <Hero />
    <FeatureM />
    <Stats />
    </AppEl>
  );
}

export default App;
