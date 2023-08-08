import React from 'react';
import styled from 'styled-components';
import TOI_1 from "../assets/TOI_1.PNG";
import TOI_2 from "../assets/TOI_2.PNG";
import TOI_3 from "../assets/TOI_3.PNG";


const Project8 = () => {
  return (
    <Wrapper>
      <PicturesBar>
        <Picture src={TOI_1} alt="TOI_1" />
        <Picture src={TOI_2} alt="TOI_2" />
        <Picture src={TOI_3} alt="TOI_3" />
      </PicturesBar>
    <hr>
    </hr>
    <br>
    </br>
    <br></br>
      <LeftSection>
        <Title>Project Title</Title>
        <Content>
          Times of India Blogs Page  
        </Content>
        
        <Title>Project Description</Title>
        <Content>
          <ul>
            <li>
            Worked as a freelancer work to upgrade and modify the existing Blogs web of Times of India (TOI).
            </li>
            <li>
            Added Top Voices section with TOI editorials animated sections which increased the web page viewership by 8x.
            </li>
            <li>
            Enhanced service file database connections and reduced loading traffic of React application by 57% using Windowing.
            </li>
            <li>
            Developed Filtering options to the page, 'You may Like' section, and progressed the page development ensuring a user-friendly experience 
            </li>
            <li>
            Ensured smooth connectivity with the Back-end and DevOps platform.
            </li>
          </ul>
        </Content>

        <Content>
          Project Type: Freelance Project
        </Content>

        <Content>
          Company: Times of India
        </Content>

        <Content>
          Duration: January, 2019 - May, 2019
        </Content>

        <Content>
          Website/Github (My Work):
          <ButtonLink href="https://timesofindia.indiatimes.com/blogs/" target="_blank" rel="noopener noreferrer">
            TOI Blogs Page
          </ButtonLink>
        </Content>
      </LeftSection>

      <RightSection>
        <Title>Tools & Technologies</Title>
        <Content>
         HTML5, CSS3, JavaScript, Ajax, Bootstrap, GIT, DevOps
        </Content>
      </RightSection>
    </Wrapper>
  );
};

export default Project8;

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