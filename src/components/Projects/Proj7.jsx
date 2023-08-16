import React from 'react';
import styled from 'styled-components';
import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";
import Blog3 from "../assets/Blog3.png";


const Project7 = () => {
  return (
    <Wrapper>
      <PicturesBar>
        <Picture src={Blog1} alt="Blog1" />
        <Picture src={Blog2} alt="Blog2" />
        <Picture src={Blog3} alt="Blog3" />
      </PicturesBar>
    <hr>
    </hr>
    <br>
    </br>
    <br></br>
      <LeftSection>
        <Title>Project Title</Title>
        <Content>
          Food Blog Web Application on AWS  
        </Content>
        
        <Title>Project Description</Title>
        <Content>
          <ul>
            <li>
            Goaled towards developing a scalable, low-latency React-Node-MySQL blog application that can deliver a good user experience.
            </li>
            <li>
            The blog application allows users to register, login, and view blog posts from other users.
            </li>
            <li>
            Users can also write and publish their own blog posts and browse through articles sorted by categories.
            </li>
            <li>
            The AWS deployment of the application has been done using multiple Amazon Web Services like Simple Storage Service (S3), Elastic Beanstalk, and Relational Database Service (RDS) with MySQL instance.
            </li>
            <li>
            Used infrastructure-as-code (IaC) and the AWS Command Line Interface (CLI) to provision and automate the creation of my cloud services, resulting in increased efficiency and streamlined processes.
            </li>
            <li>
            AWS Code Pipelines were used for the robust feature set, tight security controls, and flexibility to customize build processes
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
          <ButtonLink href="https://github.com/sagarsp123/BlogApplication-AWS" target="_blank" rel="noopener noreferrer">
            Code
          </ButtonLink>
          <ButtonLink href="https://blog-reactapp.onrender.com/" target="_blank" rel="noopener noreferrer">
            Deployed Web App
          </ButtonLink>
          <ButtonLink href="http://ecc-final-static.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
            AWS Application
          </ButtonLink>
        </Content>
      </LeftSection>

      <RightSection>
        <Title>Tools & Technologies</Title>
        <Content>
         Web Tech(React, Node JS, MySQL), AWS(S3, RDS, EBS, EC2)
        </Content>
      </RightSection>
    </Wrapper>
  );
};

export default Project7;

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