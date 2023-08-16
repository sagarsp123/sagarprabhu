import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LTI from "../assets/LTI-Logo.jpg";
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

export default function Exp3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
    <Card sx={{ maxWidth: 800, height: 550}}>
      <CardMedia
        sx={{ height: 100 }}
        image={LTI}
        title="LTI"
      />
      <CardContent sx={{ maxWidth: 750, height: 640}} style={{ backgroundColor: '#ff8d28'}}>
        <br></br>
        <ContentContainer>
        <BoldTitle>Company: </BoldTitle>
        <MediumBlackText>Larsen & Toubro Infotech Limited (Now called: LTIMindtree)</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Client: </BoldTitle>
        <MediumBlackText>Flipkart, India</MediumBlackText> 
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Designation: </BoldTitle>
        <MediumBlackText>Data Engineer Intern</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Position Duration: </BoldTitle>
        <MediumBlackText>August 2018 - March 2019</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Work Location: </BoldTitle>
        <MediumBlackText>Mumbai, India</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Technologies: </BoldTitle>
          <MediumBlackText>MySQL, SSMS, Querying, Database Development & Management, GIT</MediumBlackText>
        </ContentContainer>
        <br></br>
        <h4>Work Description:</h4>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Associated with Flipkart on MySQL database with developing Sequelize queries, managing technical compatibility with
        modifying code connections with Node.js and ensured smooth development with iterative customer testing sessions.
        </Typography>
        </li>
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