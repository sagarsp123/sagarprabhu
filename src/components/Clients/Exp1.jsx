import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LTILogo from "../assets/LTI-Logo.jpg";
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

export default function Exp1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
    <Card sx={{ maxWidth: 800, height: 620}}>
      <CardMedia
        sx={{ height: 100 }}
        image={LTILogo}
        title="LTI"
      />
      <CardContent sx={{ maxWidth: 750, height: 620}} style={{ backgroundColor: '#ff8d28'}}>
        <br></br>
        <ContentContainer>
        <BoldTitle>Company: </BoldTitle>
        <MediumBlackText> Larsen & Toubro Infotech Limited (Now called: LTIMindtree)</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Client: </BoldTitle>
          <MediumBlackText> CADENT TV, United States </MediumBlackText> 
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Designation: </BoldTitle> 
          <MediumBlackText> Software Engineer </MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Position Duration: </BoldTitle>
          <MediumBlackText>August 2020 - August 2022</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Work Location: </BoldTitle>
          <MediumBlackText>Mumbai, India</MediumBlackText>
        </ContentContainer>
        <ContentContainer>
          <BoldTitle>Technologies: </BoldTitle>
          <MediumBlackText>React JS, JavaScript, .NET Framework 4.5, .NET MVC, Python- Machine Learning, Power BI, SQL, GIT, JIRA</MediumBlackText>
        </ContentContainer>
        <br></br>
        <h4>Work Description:</h4>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Worked as a Full-Stack Software Engineer for US Client, CADENT TV on 3 live industry oriented applications.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Updated code compatibilities with migrating .NET MVC app to Kubernetes with Cucumber BDD testing.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Implemented the Unified Login Portal for Marry Wizard C# application with Windows based and Base-64 encoded token-based REST API authentications with LaunchDarkly SaaS platform.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Functioned in a Python Analytics Agile project in extracting insights and behavioral patterns from Mosaic Social
        platform’s 1000k consumer reviews utilizing Power BI which improved customer satisfaction and company profit.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Received Appreciation Badge and Pat on the Back Awards by Larsen & Toubro Infotech Limited for my dedicated work.
        </Typography>
        </li>
        </ul>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>   
  );
}