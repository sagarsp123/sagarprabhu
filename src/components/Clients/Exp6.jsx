import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import webnex from "../assets/webnex.PNG";
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

export default function Exp6() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
    <Card sx={{ maxWidth: 800, height: 550}}>
      <CardMedia
        sx={{ height: 150 }}
        image={webnex}
        title="Webnex"
      />
      <CardContent sx={{ maxWidth: 750, height: 640}} style={{ backgroundColor: '#ff8d28'}}>
        <br></br>
        <ContentContainer>
        <BoldTitle>Company: </BoldTitle>
        <MediumBlackText>Webnex</MediumBlackText> 
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Designation: </BoldTitle>
        <MediumBlackText>Web Developer Intern</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Position Duration: </BoldTitle>
        <MediumBlackText>June 2018 - Dec 2018</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
        <BoldTitle>Work Location: </BoldTitle>
        <MediumBlackText>Mumbai, India</MediumBlackText>
        </ContentContainer>
        <br></br>
        <ContentContainer>
          <BoldTitle>Technologies: </BoldTitle>
          <MediumBlackText>HTML, CSS, JavaScript, SQL, Adobe, Figma, GIT</MediumBlackText>
        </ContentContainer>
        <br></br>
        <h4>Work Description:</h4>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        Assisted designers to create graphic banners for campaigns and assisted in Regression testing for testing team.         </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.73em'>
        500+ registered users can access the HTML-CSS-JS based Responsive Hair Style Suggestion Site and provide inputs in the form of hair color, hair length, skin tone, and face shape with desired image extracted from the SQL database.
        </Typography>
        </li>
        
        </ul>
      </CardContent>
    </Card>
    </div>   
  );
}