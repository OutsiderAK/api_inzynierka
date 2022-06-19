import React from "react";
import styled from "styled-components";
import FeatureM from "../components/Feature/Multiple/FeatureM";
import Hero1 from "../components/Hero/Hero1";
import Stats from "../components/Stats/Stats";

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
          <FeatureM />
          <Stats />
        </HomeEl>
          
    );
  }