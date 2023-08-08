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


const ClientSlider = (props) => {
    
    const {company, position, link, disc} = props.item;

    const [popupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
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
            <Link to={link}>Read More</Link>
            </div>
        </Footer>

        {popupVisible && (
        <PopupOverlay>
            <PopupContainer>
                <button className="close-button" onClick={togglePopup}>
                    Close
                </button>
                {link === '/Exp0' && <Exp0 />}
                {link === '/Exp1' && <Exp1 />}
                {link === '/Exp2' && <Exp2 />}
                {link === '/Exp3' && <Exp3 />}
                {link === '/Exp4' && <Exp4 />}
                {link === '/Exp5' && <Exp5 />}

            </PopupContainer>
        </PopupOverlay>
    )}

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

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
    background-color: white;
    padding: 2rem;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    .close-button {
        background-color: #01be96;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
`;


const Header = styled.div`
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