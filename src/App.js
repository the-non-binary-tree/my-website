import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import ScrollToTop from "react-scroll-to-top";
import ScrollReveal from 'scrollreveal';
import Section3 from './Section3';
import Gallery from './Gallery';
import Section5 from './Section5';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  
	

  useEffect(() => {


    const reve =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"300px",
      reset:true,
    });
    reve.reveal(".banner-title")
 
    const rev1 =ScrollReveal({
      origin:"left",
      duration:1000,
      distance:"200px",
      reset:true,
          });
    rev1.reveal(".about,.inner3,.inner5,.one,.three")

    const rev2 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"50px",
      reset:true,
          });
    rev2.reveal(".logo,ul,.hamburger")


    const rev3 =ScrollReveal({
      origin:"right",
      duration:1000,
      distance:"200px",
      reset:true,
          });
    rev3.reveal(".hii,.inner4,.inner6,.two,.four")

    const rev4 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"20px",
      reset:true,
          });
    rev4.reveal(".upperbar")
   


    const rev5 =ScrollReveal({
      origin:"bottom",
      duration:1000,
      distance:"200px",
      reset:true,
          });
    rev5.reveal(".inner7,.inner8,.below")
   
   
    const rev6 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"200px",
      reset:true,
          });
    rev6.reveal(".inner1,.inner2")
    const rev7 =ScrollReveal({
      origin:"top",
      duration:1000,
      distance:"100px",
      reset:true,
          });
    rev7.reveal(".viewgall")
  }, [])

  
  
  return (
   <>

   <ScrollToTop />
   <Header/>
    <Section1/>
   <Section2/>
   <Section3/>
   <Section5/>
   <Gallery/>
   <Contact/>
    <Footer/> 
  
   
   </>
  );
}


export default App;
