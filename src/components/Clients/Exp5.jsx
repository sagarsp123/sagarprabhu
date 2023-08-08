import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import webnex from "../assets/webnex.PNG";

export default function Exp4() {
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
        <h3>
          Company: Webnex 
        </h3>
        <br></br>
        <h3>
          Designation: Web Developer Intern
        </h3>
        <br></br>
        <h3>Position Duration: June 2018 - Dec 2018</h3>
        <br></br>
        <h3>Work Location: Mumbai, India</h3>
        <br></br>
        <h3>Work Description:</h3>
        <ul style={{ listStyle: 'disc', fontSize: '1.3em', margin: '0.8em' }}>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        Assisted designers to create graphic banners for campaigns and assisted in Regression testing for testing team.         </Typography>
        </li>
        <li><Typography variant="body2" color="text.primary" fontSize='0.8em'>
        500+ registered users can access the HTML-CSS-JS based Responsive Hair Style Suggestion Site and provide inputs in the form of hair color, hair length, skin tone, and face shape with desired image extracted from the SQL database.
        </Typography>
        </li>
        
        </ul>
      </CardContent>
    </Card>
    </div>   
  );
}