import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import Project1 from "./components/Projects/Proj1";
import Project2 from "./components/Projects/Proj2";
import Project3 from "./components/Projects/Proj3";
import Exp1 from "./components/Clients/Exp1";
import Exp0 from "./components/Clients/Exp0";
import CertContent from "./components/Certificates/CertContent";

import Stack from "./components/Technology/Stack";

import { AiFillHome } from 'react-icons/ai';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Project4 from "./components/Projects/Proj4";
import Project5 from "./components/Projects/Proj5";
import Project6 from "./components/Projects/Proj6";
import Exp2 from "./components/Clients/Exp2";
import Exp3 from "./components/Clients/Exp3";
import Exp4 from "./components/Clients/Exp4";
import Exp5 from "./components/Clients/Exp5";
import Project7 from "./components/Projects/Proj7";


const Layout = () => {
  return (
    <>
      
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
      <Stack/>
      </LightColor>
      <Clients />
      <LightColor>
      <Projects />
      </LightColor>
      <CertContent/>
      <LightColor>
      <Footer />
      </LightColor>
      
    
    </>
  );
};

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  margin-top: 1rem; 
  margin-left: 2.5rem;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-color: #fff;
    transform: scale(0);
    transform-origin: right;
    transition: transform 400ms ease-in-out;
  }

  &:hover:before {
    transform: scale(1);
    transform-origin: left;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const HomeIcon = styled(AiFillHome)`
  margin-right: 0.5rem;
  font-size: 1.6rem;
`;

const HeaderWithHomeLink = () => {
  
  return (
      <div>
        <span>
          <HomeLink to='/'><HomeIcon/>
          <span style={{ fontSize: '1.3rem' }}>Home</span></HomeLink> 
          {/* Use Link component from react-router-dom */}
        </span>
        </div>
  );
};

const Project1Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Project1 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};


const Project2Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Project2 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};


const Project3Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Project3 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Project4Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Project4 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Project5Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Project5 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Project6Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Project6 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Project7Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Project7 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Exp1Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Exp1 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};


const Exp0Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Exp0 />
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Exp2Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Exp2/>
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Exp3Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Exp3/>
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Exp4Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Exp4/>
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

const Exp5Page = () => {

  return (
    <>
      <HeaderWithHomeLink />
      <br/>
      <br/>
      <Exp5/>
      <br/>
      <br/>
      <LightColor>
        <Footer />
      </LightColor>
    
    </>
  );
};

function App() {
  return (
    <Router>      
        <Container>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/project1" element={<Project1Page />} />
            <Route path="/project2" element={<Project2Page />} />
            <Route path="/project3" element={<Project3Page />} />
            <Route path="/project4" element={<Project4Page />} />
            <Route path="/project5" element={<Project5Page />} />
            <Route path="/project6" element={<Project6Page />} />
            <Route path="/project7" element={<Project7Page />} />
            
            <Route path="/Exp0" element={<Exp0Page />} />
            <Route path="/Exp2" element={<Exp2Page />} />
            <Route path="/Exp3" element={<Exp3Page />} /> 
            <Route path="/Exp1" element={<Exp1Page />} />
            <Route path="/Exp4" element={<Exp4Page />} />
            <Route path="/Exp5" element={<Exp5Page />} />
          </Routes>
        </Container>
      
    </Router>
  );
}


export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(50deg, #141e30, #243b55);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(50deg, #141e30, #243b55);
`;
