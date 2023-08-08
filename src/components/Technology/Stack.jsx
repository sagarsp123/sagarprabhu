import React from 'react';
import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";
import LTILogo from "../assets/LTI-Logo.jpg";

import Python from "../assets/python_logo.png";
import Java from "../assets/java.png";
import JavaScript from "../assets/javascript.png";
import logo from "../assets/logo.png";
import html from "../assets/html.png";
import redux from "../assets/redux.png";
import angular from "../assets/angular.png";
import vue from "../assets/vue.png";
import figma from "../assets/figma.png";
import node from "../assets/node.png";
import flask from "../assets/flask.png";
import spring from "../assets/spring1.png";
import asp from "../assets/asp1.png";
import pyramid from "../assets/pyramid.png";
import sql from "../assets/sql.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.jpg";
import numpy from "../assets/numpy.png";
import scikit from "../assets/scikit.png";
import tensorflow from "../assets/tensorflow.png";
import pytorch from "../assets/pytorch.png";
import aws from "../assets/aws.png";
import powerbi from "../assets/powerbi.png";
import tableau from "../assets/tableau.png";




import React_logo from "../assets/react.png";

const Stack = () => {

  const languages = [
    {
      title: 'Python',
      src: Python,
      width: 70,
      height: 70
    },
    {
      title: 'Java',
      src: Java,
      width: 70,
      height: 70
    },
    {
      title: 'JavaScript',
      src: JavaScript,
      width: 70,
      height: 70
    },
    {
      title: 'C#/ .NET',
      src: logo,
      width: 70,
      height: 70
    },
    
  ];

  
  const front_end = [
    {
      title: 'React',
      src: React_logo,
      width: 70,
      height: 70
    },
    {
      title: 'Redux',
      src: redux,
      width: 70,
      height: 70
    },
    {
      title: 'Angular',
      src: angular,
      width: 70,
      height: 70
    },
    {
      title: 'HTML5/CSS3',
      src: html,
      width: 70,
      height: 70
    },
    {
      title: 'Vue JS',
      src: vue,
      width: 70,
      height: 70
    },
    {
      title: 'Figma',
      src: figma,
      width: 70,
      height: 70
    },
    
  ];

    
  const back_end = [
    {
      title: 'Node/ Express',
      src: node,
      width: 70,
      height: 70
    },
    {
      title: 'Flask',
      src: flask,
      width: 70,
      height: 70
    },
    {
      title: 'Springboot & Hibernate',
      src: spring,
      width: 70,
      height: 70
    },
    {
      title: 'ASP.NET',
      src: asp,
      width: 70,
      height: 70
    },
    {
      title: 'Pyramid',
      src: pyramid,
      width: 70,
      height: 70
    },
    {
      title: 'SQL & Postgres',
      src: sql,
      width: 70,
      height: 70
    },
    {
      title: 'MySQL',
      src: mysql,
      width: 70,
      height: 70
    },
    {
      title: 'Mongo',
      src: mongo,
      width: 70,
      height: 70
    }
  ];


  const data = [
    {
      title: 'Numpy/ Pandas',
      src: numpy,
      width: 70,
      height: 70
    },
    {
      title: 'Scikit-learn',
      src: scikit,
      width: 70,
      height: 70
    },
    {
      title: 'Tensorflow',
      src: tensorflow,
      width: 70,
      height: 70
    },
    {
      title: 'Pytorch',
      src: pytorch,
      width: 70,
      height: 70
    },
    {
      title: 'AWS',
      src: aws,
      width: 70,
      height: 70
    },
    {
      title: 'Power BI',
      src: powerbi,
      width: 70,
      height: 70
    },
    {
      title: 'Tableau',
      src: tableau,
      width: 70,
      height: 70
    },
  ];


  const Software = [
    'Front-End Tech: React JS, Angular JS, HTML5, CSS3, NextJS, Typescript',
    'Back-End Tech: Node JS, Flask, Django, Express JS, PHP',
    'Databases: SQL, MySQL, PostgreSQL, Amazon RDS, Firebase, MongoDB, Amazon Dynamo, Neo4j',
    'Design tools: WordPress, Figma, Canvas',
  ];

  const Data = [
    'Data Science Tech: NumPy, Pandas, Scikit-learn, AWS , Machine Learning, Pytorch, Kubernetes, Hadoop',
    'Analytical tools: Google Analytics, Tableau, Power BI, Alteryx platform, Microsoft Excel, Adobe',
  ];

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Container id="stack">
    
      <Slide direction="down">
        <h4>
          My <span className="green">Technical Skills</span>
        </h4>
        <br></br>
        <h2>Check out:</h2>
      </Slide>
      <br></br>
      <br></br>
      <br></br>
      
      <h3>Languages</h3>
      <hr></hr>
      <br></br>
      {/* <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {Languages.map((point, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span style={{ fontFamily: 'Arial', fontSize: '16px' }}>
              &bull; {point}
            </span>
          </li>
        ))}
      </ul> */}
      <div style={{ display: 'flex' }}>
      {languages.map((image, index) => (
        <div key={index} style={{ margin: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={image.src}
              alt={image.title}
              style={{ width: `${image.width}px`, height: `${image.height}px`, marginRight: '10px' }}
            />
            <p>{image.title}</p>
          </div>
        </div>
      ))}
    </div>
    <br></br>
      <br></br>
      <br></br>
      <h3>Front-End</h3>
      <hr></hr>
      <br></br>
      <div style={{ display: 'flex' }}>
      {front_end.map((image, index) => (
        <div key={index} style={{ margin: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={image.src}
              alt={image.title}
              style={{ width: `${image.width}px`, height: `${image.height}px`, marginRight: '10px' }}
            />
            <p>{image.title}</p>
          </div>
        </div>
      ))}
    </div>
    <br></br>
      <br></br>
      <br></br>
      <h3>Back-End & Databases</h3>
      <hr></hr>
      <br></br>
      <div style={{ display: 'flex' }}>
      {back_end.map((image, index) => (
        <div key={index} style={{ margin: '0 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={image.src}
              alt={image.title}
              style={{ width: `${image.width}px`, height: `${image.height}px`, marginRight: '10px' }}
            />
            <p>{image.title}</p>
          </div>
        </div>

        
      ))}
    </div>
    <br></br>
      <br></br>
      <br></br>
    <h3>ML, Cloud & Analytics</h3>
    <hr></hr>
    <br></br>
      <div style={{ display: 'flex' }}>
      {data.map((image, index) => (
        <div key={index} style={{ margin: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={image.src}
              alt={image.title}
              style={{ width: `${image.width}px`, height: `${image.height}px`, marginRight: '10px' }}
            />
            <p>{image.title}</p>
          </div>
        </div>

        
      ))}
    </div>
    <br></br>
    <br></br>
      </Container>
    </div>

    
  );
};

export default Stack;


const Container = styled.div`
  width: 100%;
  max-width: 1570px;
  padding: 2rem 0;
  padding-left: 25px;
  @media (max-width: 700px) {
    width: 70%;
  }

  h1 {
    padding-top: 1rem;
  }
`;