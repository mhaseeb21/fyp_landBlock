import React from 'react';
import './header.css'; // Import CSS file

function Header() {
  return (
    <div className="container-fluid bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <a href="/" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">Land<span className="text-secondary">Block</span></h1>
          </a>
          <div className="d-flex flex-grow-1 justify-content-center">
          <a href= "/">  <button href= "/" className="custom-btn me-2">Home</button></a>
          <a href= "/Blog">  <button href= "/Blog" className="custom-btn me-2">Blog</button></a>
          <a href= "/Login">  <button className="custom-btn me-2">Login</button> </a>
          <a href= "/Register"> <button href= "/Registration" className="custom-btn me-2">Registration</button></a>

          </div>
       
    
          <div className="d-none d-xl-flex flex-shrink-0">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
              <a href="/" className="position-relative animated tada infinite">
                <i className="fa fa-phone-alt text-white fa-2x"></i>
                <div className="position-absolute" style={{ top: '-7px', left: '20px' }}>
                  <span><i className="fa fa-comment-dots text-secondary"></i></span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column pe-4 border-end">
              <span className="" style={{color:'white'}}>Have any questions?</span>
              <span className=""style={{color:'white'}}>Call: +92 3029014375</span>
            </div>
            <div className="d-flex align-items-center justify-content-center ms-4 ">
              <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
