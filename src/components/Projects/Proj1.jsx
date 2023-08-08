import React from 'react';
import styled from 'styled-components';
import Booking1 from "../assets/Booking1.JPG";
import Home1 from "../assets/Home1.JPG";
import Home2 from "../assets/Home2.JPG";
import Register from "../assets/Register.JPG";


const Project1 = () => {
  return (
    <Wrapper>
      <PicturesBar>
        <Picture src={Home1} alt="Home 1" />
        <Picture src={Home2} alt="Home 2" />
        <Picture src={Booking1} alt="Register" />
      </PicturesBar>
      <hr>
    </hr>
    <br>
    </br>
    <br></br>
      <LeftSection>
        <Title>Project Title</Title>
        <Content>
          BookEasy- Booking Management System
        </Content>
        
        <Title>Project Description</Title>
        <Content>
          <ul>
            <li>
            Designed WordPress UI Prototype, REST API with Google, Mobile authentication, and Firebase Web Notifications.
            </li>
            <li>
            Formulated Redux for state management and leveraged JWT for managing 100+ users session concurrently.
            </li>
            <li>
            Engineered hotel room booking allowing chat support, visualization design dashboard, and emails users with chatbot interaction for booking hotels and cancellation procedures based on inputs fed.
            </li>
          </ul>
        </Content>

        <Content>
          Project Type: Personal Project
        </Content>

        <Content>
          Company: Indiana University Bloomington
        </Content>

        <Content>
          Duration: February, 2023 - April, 2023
        </Content>

        <Content>
          Website/Github (My Work): 
          <ButtonLink href="https://bookeasy.netlify.app/" target="_blank" rel="noopener noreferrer">
            Demo
          </ButtonLink>
          <ButtonLink href="https://github.com/your-username/repository-name" target="_blank" rel="noopener noreferrer">
            Code
          </ButtonLink>  
        </Content>
      </LeftSection>

      <RightSection>
        <Title>Tools & Technologies</Title>
        <Content>
        React JS, Redux, Node JS, Express JS, Firebase, SQL, Figma, Netlify
        </Content>
      </RightSection>
    </Wrapper>
  );
};

export default Project1;

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