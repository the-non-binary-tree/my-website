import React, { useState } from "react";
import "./mainCSS.css";
import Link from "./Link";
import Seclink from "./Seclink";
import img from './images/LOGO-01-01.png'


const Header=()=>{
 const [show,setshow] =useState(false);

  

	return(
            <>
     <div className="container-fluid header">
		        <div className="container nav">
						<img className="logo" src={img} alt=""/>
						
						{show?<i onClick={()=>{setshow(!show)}} className="fas fa-times hamburger"></i>:<i onClick={()=>{setshow(!show)}} className="fas fa-align-right hamburger"></i>}
					
						<Link/>	
						
							
				 </div>
				{ show ?<Seclink/>:null}
	</div>
</>
        )
    
}
export default Header;