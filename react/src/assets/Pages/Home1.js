import React from "react";
import styled from "styled-components";
import FeatureM from "../components/Feature/Multiple/FeatureM";
import Hero1 from "../components/Hero/Hero1";
import Stats from "../components/Stats/Stats";
import { Title, SubTitle, Content, HeroEl } from "../components/Hero/Hero";
import Home from "../images/home.png"

const HomeEl = styled.div`
display: flex;
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;
`;



export default function Home1() {
    return (
        <HomeEl>
          <Hero1 />
          <HeroEl>
            <Content>
            <span>
              <Title>Fiszki z <br></br>języka migowego</Title>
              <SubTitle>Chcesz nauczyć się języka migowego? Fiszki to najprostsza oraz najskuteczniejsza forma nauki. <br></br>Spróbuj sam!
              </SubTitle>
            </span>
            <img src = {Home} />
            </Content>
          </HeroEl>
          <FeatureM />
          <Stats />
        </HomeEl>
          
    );
  }