import React from 'react';
import styled from 'styled-components';
import Product_1 from "../assets/Product_1.png";
import Product_2 from "../assets/Product_2.png";
import Product_3 from "../assets/Product_3.png";


const Project3 = () => {
  return (
    <Wrapper>
      <PicturesBar>
        <Picture src={Product_1} alt="Product_1" />
        <Picture src={Product_2} alt="Product_2" />
        <Picture src={Product_3} alt="Product_3" />
      </PicturesBar>
    <hr>
    </hr>
    <br>
    </br>
    <br></br>
      <LeftSection>
        <Title>Project Title</Title>
        <Content>
          Product Review Analysis for Genuine Rating  
        </Content>
        
        <Title>Project Description</Title>
        <Content>
          <ul>
            <li>
            Utilized .NET and VADER to demonstrate best product buys based on genuine user ratings in a ECommerce test website.
            </li>
            <li>
            Developed advanced Sentiment Analysis that identifies the hidden sentiments within user's text reviews and calculates rated product value average on cumulated Polarity scores.
            </li>
            <li>
            Picturized categorized reviews into positive and negative and average star ratings for that selected product.
            </li>
            <li>
            The site comprises of 2 panels, admin and user where the former's job is to manage products and the other can buy products & in turn provide their valuable ratings and reviews.
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
          Duration: January, 2019 - March, 2020
        </Content>

        <Content>
          Website/Github (My Work):
          <ButtonLink href="https://github.com/sagarsp123/ECommerceWebsite-Product-Review-Analysis-for-Genuine-Rating" target="_blank" rel="noopener noreferrer">
            Github Repo
          </ButtonLink>
          <ButtonLink href="https://www.irjet.net/archives/V7/i4/IRJET-V7I41198.pdf" target="_blank" rel="noopener noreferrer">
            Published Research Paper
          </ButtonLink>
        </Content>
      </LeftSection>

      <RightSection>
        <Title>Tools & Technologies</Title>
        <Content>
         .NET, C#, VADER, SentimentIntensityAnalyzer Package, HTML5/CSS3, Figma
        </Content>
      </RightSection>
    </Wrapper>
  );
};

export default Project3;

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