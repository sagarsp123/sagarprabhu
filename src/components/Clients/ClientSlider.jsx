import React, {useState}  from 'react'
import styled from 'styled-components'
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Exp0 from './Exp0'
import Exp1 from './Exp1'
import Exp2 from './Exp2'
import Exp3 from './Exp3'
import Exp4 from './Exp4'
import Exp5 from './Exp5'
import Exp6 from './Exp6'

const ClientSlider = (props) => {
    
    const {company, position, link, disc} = props.item;
    const { openPopup } = props; // Extract openPopup from props

    const getPopupContent = (link) => {
        switch (link) {
            case '/Exp0':
                return <Exp0 />;
            case '/Exp1':
                return <Exp1/>;
            case '/Exp2':
                return <Exp2/>;
            case '/Exp3':
                return <Exp3/>;
            case '/Exp4':
                return <Exp4/>;
            case '/Exp5':
                return <Exp5/>;
            case '/Exp6':
                return <Exp6/>;    
            // Add cases for other links if needed
            default:
                return null;
        }
    };

  return (
    <Container>
        <header>
            <h3>{company}</h3>
        </header>
        <br></br>
        <Body>
            {position}
            <br></br>
            {disc}
        </Body>
        <Footer>
                <div className="details">
                    <button onClick={() => openPopup(getPopupContent(link))}>
                        Read More
                    </button>
                </div>
            </Footer>
        </Container>    
                
  );
};


export default ClientSlider

const ParentContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    width: 90%;
    height:100%;
    margin: 0 1rem;
`

export const PopupContainer = styled.div`
    // Define your popup container styles here
    //padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: 800px;
    text-align: left;
    overflow-y: auto; // Enable scrolling within the popup
    z-index: 10000; // Adjust z-index to be above overlay
    position: absolute; // Use 'absolute' positioning
    top: 50%; // Adjust vertical position as needed
    left: 50%; // Adjust horizontal position as needed
    transform: translate(-50%, -50%); // Center the popup
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Disable scrolling
  z-index: 9999; // Adjust z-index as needed
`;

export const CloseButtonContainer = styled.div`
    border: 1px solid #333;
    background: white;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
`;

export const CloseButton = styled.button`
background: transparent;
border: 2px;
font-size: 17px;
color: black;
cursor: pointer;
margin-top: 30px; /* Add some spacing between content and button */
`;

const Header = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #01be96;
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    
    font-size: 1rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`