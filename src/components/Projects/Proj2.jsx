import React from 'react';
import styled from 'styled-components';
import HMS1 from "../assets/HMS_1.png";
import HMS2 from "../assets/HMS_2.png";
import HMS3 from "../assets/HMS_3.png";


const Project2 = () => {
  return (
    <Wrapper>
      <PicturesBar>
        <Picture src={HMS1} alt="HMS1" />
        <Picture src={HMS2} alt="HMS2" />
        <Picture src={HMS3} alt="HMS3" />
      </PicturesBar>
      <hr>
    </hr>
    <br>
    </br>
    <br></br>
      <LeftSection>
        <Title>Project Title</Title>
        <Content>
          Curative Care Hospital Management System  
        </Content>
        
        <Title>Project Description</Title>
        <Content>
          <ul>
            <li>
            Facilitated Admin for registrations, Diagnostician offering tests, and Pharmacist with medications in web application.
            </li>
            <li>
            Used Flask-SQLAlchemy with interactive interfaced flask_wtf and secure CSRF token fed to SQLite DB.
            </li>
          </ul>
        </Content>

        <Content>
          Project Type: Personal Project
        </Content>

        <Content>
          Company: N/A
        </Content>

        <Content>
          Duration: March, 2019 - June, 2019
        </Content>

        <Content>
          Website/Github (My Work):
          <ButtonLink href="https://github.com/sagarsp123/CurativeCare_HMS" target="_blank" rel="noopener noreferrer">
            Code
          </ButtonLink>  
          <ButtonLink href="https://www.irjet.net/archives/V8/i3/IRJET-V8I3441.pdf" target="_blank" rel="noopener noreferrer">
            Research Paper
          </ButtonLink> 
        </Content>
      </LeftSection>

      <RightSection>
        <Title>Tools & Technologies</Title>
        <Content>
        Flask,SQLAlchemy, SQLite, Python, HTML/CSS, WTForms   
        </Content>
      </RightSection>
    </Wrapper>
  );
};

export default Project2;

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