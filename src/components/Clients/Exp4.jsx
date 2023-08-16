import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Billeasy from "../assets/Billeasy.jpg";
import styled from 'styled-components'


const BoldTitle = styled.h4`
    font-weight: bold;
`;

const MediumBlackText = styled.p`
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    margin-left: 8px;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: baseline;
    
`;

export default function Exp4() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
    <Card sx={{ maxWidth: 800, height: 550}}>
      <CardMedia
        sx={{ height: 150 }}
        image={Billeasy}
        title="Billeasy"
      />
      <CardContent sx={{ maxWidth: 750, height: 640}} style={{ backgroundColor: '#ff8d28'}}>
        <br></br>
        <ContentContainer>
        <BoldTitle>Company: </BoldTitle>
        <MediumBlackText>Billeasy</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Designation: </BoldTitle>
        <MediumBlackText>Data Analyst Intern</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Position Duration: </BoldTitle>
        <MediumBlackText>April 2018 - October 2018</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Work Location: </BoldTitle>
        <MediumBlackText>Mumbai, India</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Technologies: </BoldTitle>
          <MediumBlackText>Data Science, Analytics, Machine Learning Algorithms, EDA, Visualization, Power BI, GIT, JIRA</MediumBlackText>
        </ContentContainer>
        <br></br>
        <h4>Work Description:</h4>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Collaborated with cross-functional teams utilizing data pre-processing, EDA on ML modeled data with advising dynamic
        sales trends on Power BI visualization tool to stakeholders and leading to a improvized customer feedback process by 8x.        </Typography>
        </li>
        {/* <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Developed three main features which included shifting opacity scaling (0 to 100%) to render parts of texts and images
        illegible to users, item card embedding- object index filtering and mouseover functionality to embrace legibility.
        </Typography>
        </li> */}
        {/* <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Implemented the Unified Login Portal for Marry Wizard C# application with Windows based and Base-64 encoded token-based REST API authentications with LaunchDarkly SaaS platform.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Functioned in a Python Analytics Agile project in extracting insights and behavioral patterns from Mosaic Social
        platform’s 1000k consumer reviews utilizing Power BI which improved customer satisfaction and company profit.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Received Appreciation Badge and Pat on the Back Awards by Larsen & Toubro Infotech Limited for my dedicated work.
        </Typography>
        </li> */}
        </ul>
      </CardContent>
    </Card>
    </div>   
  );
}