import React from 'react';
import styled from 'styled-components';
import LTI_1 from "../assets/LTI-1.png";
import PCAP from "../assets/PCAP.png";
import MTA from "../assets/MTA.JPG";
import PCEP from "../assets/PCEP.png";
import Codility from "../assets/Codility.JPG";
import Internshala from "../assets/Internshala.png";
import php_mysql from "../assets/php-mysql.png";
import Hackerrank from "../assets/Hackerrank.png";
import Python from "../assets/Python.png";
import Leetcode from "../assets/Leetcode.png";


import { Zoom } from 'react-awesome-reveal';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const CircularImage = ({ src, alt, title, Issued, CertNo }) => (
  <ImageContainer>
  <div style={{ borderRadius: '50%', overflow: 'hidden', width: '260px', height: '260px' }}>
    <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
  <Title>{title}</Title>
  <Title>{Issued}</Title>
  <Title>{CertNo}</Title>
   </ImageContainer>
);

const Title = styled.p`
margin-top: 10px;
text-align: center;
`;

const CertContent = () => {
  const images = [
    { src: LTI_1, alt: 'Image 1', title:'Larsen & Toubro Infotech Award', Issued:'Issued: March 2022' },
    { src: MTA, alt: 'Image 2', title:'Microsoft-MTA Certification', Issued:'Issued: April 2021', CertNo:'Certificate No: 6502C4-26D68Z'},
    { src: PCAP, alt: 'Image 3', title:'Python Institute-PCAP', Issued:'Issued: February 2022', CertNo:'Certificate Code: t4e9.A0nh.C25t' },
    { src: PCEP, alt: 'Image 4', title:'Python Institute-PCEP', Issued:'Issued: January 2021', CertNo:'Certificate Code: cJ5f.YZOh.L2nv'},
    { src: Codility, alt: 'Image 2', title:'Larsen & Toubro Infotech Limited- .NET Codility Certified', Issued:'Issued: December 2020' },
    { src: Hackerrank, alt: 'Image 5', title:'HackerRank- Problem Solving Gold Badge (5 star)'},
    { src: Python, alt: 'Image 6', title:'HackerRank- Python (5 star)'},
    { src: Leetcode, alt: 'Image 7', title:'Leetcode 50 days Badge'},
    
    { src: Internshala, alt: 'Image 2', title:'Internshala Student Partner', Issued:'Issued: January 2019' },
    { src: php_mysql, alt: 'Image 2', title:'Aptech Certified- PHP & MySQL', Issued:'Issued: March 2019' },
    
    
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        },
      },
    ],
  };

  const SliderComp = () => {
    const sliderRef = React.useRef();

    const handlePrevClick = () => {
      sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
      sliderRef.current.slickNext();
    };


  return (
    <Container>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <CircularImage key={index} src={image.src} alt={image.alt} title={image.title} Issued={image.Issued} CertNo={image.CertNo} />
        ))}
      </Slider>
      <Buttons>
        <button onClick={handlePrevClick} className='back'><IoIosArrowBack /></button>
        <button onClick={handleNextClick} className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  );
};

return (
  <div>
    <Container id='certificate'>
      <Zoom>
        <h1>My <span className="green">Achievements</span></h1>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
          voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p> */}
      </Zoom>
    </Container>
    <SliderComp />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
);

  // return (
  //   <div>
  //     <Container id='project'>
  //     <Zoom>
  //           <h1>My <span className="green">Achievements</span></h1>
  //           {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
  //           voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p> */}
  //     </Zoom>
  //     </Container>
  //     <Slider {...settings} >
  //     {images.map((image, index) => (
  //       <CircularImage key={index} src={image.src} alt={image.alt} title={image.title} />
          
  //     ))}
  //     </Slider>
     
  //     <br></br>
  //     <br></br>
  //     <br></br>
  //     <br></br>
      
  //   </div>
  // );
};


export default CertContent;

const Container = styled.div`
    width: 80%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 1rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 80%;
    }
    h1{
        font-size: 1.9rem;
    }    
        
`;

// const ImageGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
//   justify-items: center;
// `;

// const ImageContainer = styled.div`
//   position: relative;
// `;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  button {
    width: 4rem;
    height: 4rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;