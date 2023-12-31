import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";


const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h2>Sagar Srinivas Prabhu</h2>
        </Slide>
        <br></br>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>Indiana, United States (Open to Relocate within US)</p>
          </Slide>
        </div>
        <br></br>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div className="contact-items">
            <div className="contact-item">
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+1 (812)-650-8652" style={{ color: 'white' }}>+1 (812)-650-8652</a>
            </Slide>
          </div>
          <div className="contact-item">
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:prabhusagar1305@gmail.com" style={{ color: 'white' }}>prabhusagar1305@gmail.com</a>
            </Slide>
          </div>
        </div>
        </div>
        <br></br>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/sagarprabhu98/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://github.com/sagarsp123">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      {/* <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <button>Submit</button>
          </form>
        </Slide>
      </Form> */}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center; /* Center the text content */
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Profile = styled.div`
  width: 100%;
  .address {
    width: 100%;
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }
    p {
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    width: 100%;
  
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  
    .contact-items {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
  
      .contact-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
  
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
          width: 2rem;
          height: 2rem;
          border-radius: 50px;
  
          :hover {
            background-color: orange;
          }
          
          a {
            margin-top: 0.2rem;
            color: white; /* Set text color to white */
            :hover {
              color: blue; /* Change color on hover to blue */
            }
          }
        }
      }
    }
  }
  
  .profiles {
    width: 100%;
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: center; /* Center horizontally */
      gap: 0.5rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        :hover {
          background-color: orange;
        }
        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;

const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;

const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      flex-direction: column; /* Adjusted */
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;