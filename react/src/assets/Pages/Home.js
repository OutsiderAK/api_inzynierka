import React from "react";
import styled from "styled-components";
import FeatureM from "../components/Feature/Multiple/FeatureM";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";

const HomeEl = styled.div`
display: flex;
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;
`;

export default function Home() {
    return (
        <HomeEl>
          <Hero />
          <FeatureM />
          <Stats />
        </HomeEl>
          
    );
  }