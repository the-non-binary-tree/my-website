import cert from './images/sqkas.jpg'
import cert2 from './images/godhuli group.png'
import cert3 from './images/iirwu education.jpeg'

const Section5=()=>{
return (
    <>
   <div id="intern" className="section"  >
   <div className="sectitle text-center">
				Work Experience
			</div>
	<div className="container-fluid internback">
		
        
        <div className="row justify-content-center text-center">
			
			<div className="col-md-3 one" >
				<div className="internship" >
					<h1>HITian Inside</h1>
					<h4>Graphic Design</h4>
					<p>3 years+</p>
					<span><a href="" download=""></a></span><br/><br/>
					<a href="https://www.facebook.com/HITian.Inside/" target="_blank">About Team</a>


				</div>
				 	

			</div>
			<div className="col-md-3 two">
				<div className="internship">
					<h1>SQKAS</h1>
					<h4>Graphic Design(Products)</h4>
					<p>1 months</p>
					<span className="cer"><a href={cert} download="">Certficate</a></span><br/><br/>
					<a href="https://www.facebook.com/SQKAS/" target="_blank">About Company</a><br/>
					
				</div>
				 	
			</div>
		
		</div>
		
		<div className="row justify-content-center text-center">
			
			<div className="col-md-3 three" >
				<div className="internship">
					<h1 >Godhuli Group</h1>
					<h5 className="font">Graphic Design & video editor</h5>
					<p>3 months</p>
					<span className="cer"><a href={cert2} download="">Certficate</a></span><br/><br/>
					<a href="https://www.facebook.com/GodhuliHealthCare" target="_blank">About Company</a>
				</div>


			</div>
			<div className="col-md-3 four">
				<div className="internship">
					<h1>IIRWU Education</h1>
					<h4>Graphic Design</h4>
					<p>2 months</p>
					<span className="cer"><a href={cert3} download="">Certficate</a></span><br/><br/>
					<a href="https://www.linkedin.com/company/iirwu/?originalSubdomain=in" target="_blank">About Company </a>
				</div>
			</div>
		
		</div>
	</div>
<div id="gall"></div>
	
</div>
    </>
)
}

export default Section5;