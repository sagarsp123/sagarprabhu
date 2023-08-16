import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IDAH from "../assets/IDAH.png";
import styled from 'styled-components';


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

export default function Exp0() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
    <Card sx={{ maxWidth: 800, height: 550}}>
      <CardMedia
        sx={{ height: 100 }}
        image={IDAH}
        title="IDAH"
      />
      <CardContent sx={{ maxWidth: 750, height: 640}} style={{ backgroundColor: '#ff8d28'}}>
        <br></br>
        <ContentContainer>
        <BoldTitle>Company:</BoldTitle>
        <MediumBlackText>Indiana University Research- IDAH, Office of Vice Provost</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Designation:</BoldTitle> 
        <MediumBlackText>Lead Web Developer (Part-time)</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Position Duration: </BoldTitle>
        <MediumBlackText>July 2023 - Present</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Work Location: </BoldTitle>
          <MediumBlackText>Bloomington, Indiana</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Technologies: </BoldTitle>
          <MediumBlackText>JavaScript, Ruby, Jekyll-Liquid, HTML5, CSS3, Figma</MediumBlackText>
        </ContentContainer>
        <br></br>
        <h4>Work Description:</h4>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Worked with a PhD Research Awardee on developing a Jekyll-Liquid web platform for a New York Academy of
        Medicine and Data Fluencies Grants funded research project, the Tuberculosis Specimen Dissertation.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Developed three main features which included shifting opacity scaling (0 to 100%) to render parts of texts and images
        illegible to users, item card embedding- object index filtering and mouseover functionality to embrace legibility.
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