import React from 'react';

const Topbar = () => {
  return (
    <div className="container-fluid bg-dark py-2 d-none d-md-flex">
      <div className="container">
        <div className="d-flex justify-content-between topbar">
          <div className="top-info">
            <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>23 Ranking Street, New York</small>
            <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>Email@Example.com</small>
          </div>
          <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
          <div className="top-link">
            <a href="/" className="bg-light nav-fill btn btn-sm rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></a>
            <a href="/" className="bg-light nav-fill btn btn-sm rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></a>
            <a href="/" className="bg-light nav-fill btn btn-sm rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></a>
            <a href="/" className="bg-light nav-fill btn btn-sm rounded-circle"><i className="fab fa-linkedin-in text-primary"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
