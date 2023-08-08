import React from 'react';
import styled from 'styled-components';
import Cadent_0 from "../assets/Cadent_0.PNG";
import Cadent_2 from "../assets/Cadent_1.PNG";
import Cadent_3 from "../assets/Cadent_3.PNG";


const Project5 = () => {
  return (
    <Wrapper>
      <PicturesBar>
        <Picture src={Cadent_0} alt="Cadent_0" />
        <Picture src={Cadent_2} alt="Cadent_2" />
        <Picture src={Cadent_3} alt="Cadent_3" />
      </PicturesBar>
    <hr>
    </hr>
    <br>
    </br>
    <br></br>
      <LeftSection>
        <Title>Project Title</Title>
        <Content>
          CPPC, Aperture- Unified Login Portal & Marry Wizard Application- CADENT TV Company, US  
        </Content>
        
        <Title>Project Description</Title>
        <Content>
          <ul>
            <li>
            Worked as a Full-Stack Software Engineer for US Client, CADENT TV on 3 live industry oriented applications.
            </li>
            <li>
            Updated code compatibilities with migrating .NET MVC app to Kubernetes with Cucumber BDD testing.
            </li>
            <li>
            Implemented the Unified Login Portal for Marry Wizard C# application with Windows based and Base-64 encoded
            token-based REST API authentications with LaunchDarkly SaaS platform.
            </li>
            <li>
            Enhanced service file database connections and reduced loading traffic of React application by 57% using Windowing.
            </li>
            <li>
            Developed “MSA Access” system to assist DevOps team in identifying Read/Write functions for 100’s of JSON files.
            </li>
          </ul>
        </Content>

        <Content>
          Project Type: Professional/Work Project
        </Content>

        <Content>
          Company: CADENT TV, United States- LTI Client
        </Content>

        <Content>
          Duration: January, 2021 - August, 2022
        </Content>

        <Content>
          Website/Github (My Work):
          <ButtonLink href="https://cadent.tv/platform/" target="_blank" rel="noopener noreferrer">
            Aperture Platfrom
          </ButtonLink>
          <ButtonLink href="https://cadent.tv/platform/planning-optimizing/" target="_blank" rel="noopener noreferrer">
            Campaign Planning Platfrom
          </ButtonLink>  
        </Content>
      </LeftSection>

      <RightSection>
        <Title>Tools & Technologies</Title>
        <Content>
        REACT, C#, .NET, REST API, SQL, LaunchDarklyTokens, Kubernetes, DevOps, Agile, GIT, Scrum 
        </Content>
      </RightSection>
    </Wrapper>
  );
};

export default Project5;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const PicturesBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Picture = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
  margin: 0 20px;
`;


const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #69F0AE;
`;

const Content = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  font-size: 16px;
  color: white;
`;

const ButtonLink = styled.a`
  display: inline-block;
  margin-left: 10px;
  margin-right: 20px;
  padding: 8px 16px;
  border: 2px solid #69F0AE;
  border-radius: 4px;
  color: #69F0AE;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #69F0AE;
    color: white;
  }
`;