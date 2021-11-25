import React from "react";
import "./mainCSS.css";import Type from "./Typical";
import img from './images/mypik-02.png'

const Section1 =()=>{


return (
    <>
    <div id="bg">

	<div className="upperbar"></div>


		<div className="container">
	
			<div className="row section1box ">
				<div className="col nav" >
					<div className="banner-title"  >
						<h1 className="title" >Hi, I'am Anjani </h1>
						<p className="size" > a  <span className="element"> <Type/></span></p>
					</div>
				
					<div  className="col-md-6 myphoto">
					   <img src={img}  alt=""/>
					</div>
				
					
				</div>
			
		</div>
		<div id="about" className="scroll rellax" data-rellax-speed="-6"><br/><i className="fas fa-chevron-down"></i></div>

	</div>
</div>
    </>
)
}

export default Section1;