const Footer =()=>{
    const year =new Date().getFullYear();
    return(
        <div className="container-fluid copyright">COPYRIGHT <i className="fa fa-copyright" aria-hidden="true"></i> {year} | Anjani Sharma</div>
    )
}

export default Footer;