import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ONC from "../assets/ONC_1.jpg";

export default function Exp2() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
    <Card sx={{ maxWidth: 800, height: 550}}>
      <CardMedia
        sx={{ height: 100 }}
        image={ONC}
        title="ONC"
      />
      <CardContent sx={{ maxWidth: 750, height: 640}} style={{ backgroundColor: '#ff8d28'}}>
        <br></br>
        <h3>
          Company: Our National Conversation (ONC)
        </h3>
        <br></br>
        <h3>
          Designation: Web Developer Summer'23 Intern
        </h3>
        <br></br>
        <h3>Position Duration: June 2023 - Present</h3>
        <br></br>
        <h3>Work Location: Los Angeles, CA, United States</h3>
        <br></br>
        <h3>Work Description:</h3>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Improvized website development with text and video chatrooms which increased site viewership by 58% and managed
        on architecting 2 prototypes processing client data into web analytical data leveraging Power BI- Google Analytics.
        </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Reduced React-Redux site’s freeze by 3x using Lazy Loading optimization and enhanced cross-platform compatibility.        </Typography>
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