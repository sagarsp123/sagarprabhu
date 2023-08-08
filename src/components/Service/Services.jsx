import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsFillDatabaseFill } from "react-icons/bs";
import { BsKeyboard } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { VscProject } from "react-icons/vsc";


import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BsKeyboard}
            title={"Software Engineer"}            
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Web Developer & Designer"}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={VscProject}
            title={"Data Scientist"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsFillDatabaseFill}
            title={"Data Engineer/ Analyst"}
            
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BsGraphUp}
            title={"ML Engineer"}
            
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  max-width: 1580px;
  padding: 2rem 0;
  padding-left: 50px;
  @media (max-width: 1000px) {
    width: 100%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 3rem;
  gap: 0.2rem;
`;
