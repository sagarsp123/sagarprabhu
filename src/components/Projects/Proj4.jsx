import React from 'react';
import styled from 'styled-components';
import Kaggle0 from "../assets/Kaggle_0.PNG";
import Kaggle2 from "../assets/Kaggle_3.PNG";
import Kaggle1 from "../assets/Kaggle_Club.png";


const Project4 = () => {
  return (
    <Wrapper>
      <PicturesBar>
        <Picture src={Kaggle0} alt="Kaggle0" />
        <Picture src={Kaggle1} alt="Kaggle1" />
        <Picture src={Kaggle2} alt="Kaggle2" />
      </PicturesBar>
      <hr>
    </hr>
    <br>
    </br>
    <br></br>
      <LeftSection>
        <Title>Project Title</Title>
        <Content>
          Loan Prediction Analysis System  
        </Content>
        
        <Title>Project Description</Title>
        <Content>
          <ul>
            <li>
            Predicted client’s loan repayment operating 7 ML Algorithms and Tensorboard visuals on the Docker imaged dataset.
            </li>
            <li>
            Conceptualized grid search, modeling OHE pipelines with 0.84 cross-validated F-1 score employing 79% MSE precision.
            </li>
            <li>
            Implemented Boosting Algos, Softmax and ReLu neural networks with 0.92 test accuracy for MLP and 0.776 kaggle score.
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
          Duration: October, 2022 - December, 2022
        </Content>

        <Content>
          Website/Github (My Work):
          <ButtonLink href="https://github.com/sagarsp123/-Kaggle_Project-Home-Credit-Default-Risk-Analysis-System" target="_blank" rel="noopener noreferrer">
            Code
          </ButtonLink>  
        </Content>
      </LeftSection>

      <RightSection>
        <Title>Tools & Technologies</Title>
        <Content>
        ML Algorithms, Docker, Neural Networks, Gradient Boosting, Pytorch, Tensorboard, GIT   
        </Content>
      </RightSection>
    </Wrapper>
  );
};

export default Project4;

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