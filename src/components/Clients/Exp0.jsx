import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IDAH from "../assets/IDAH.png";

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
        <h3>
          Company: Indiana University Research- IDAH, Office of Vice Provost
        </h3>
        <br></br>
        <h3>
          Designation: Lead Web Developer (Part-time)
        </h3>
        <br></br>
        <h3>Position Duration: July 2023 - Present</h3>
        <br></br>
        <h3>Work Location: Bloomington, IN, United States</h3>
        <br></br>
        <h3>Work Description:</h3>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Worked with a PhD Research Awardee on developing a Jekyll-Liquid web platform for a New York Academy of
        Medicine and Data Fluencies Grants funded research project, the Tuberculosis Specimen Dissertation.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
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