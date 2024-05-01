import React from 'react'

function FactSection() {
  return (
    
    <div className="container-fluid bg-success py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
            <div className="d-flex counter">
              <h5 className="text-white mt-1">Success in getting happy customer</h5>
            </div>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
            <div className="d-flex counter">
              <h5 className="text-white mt-1">Thousands of successful business</h5>
            </div>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
            <div className="d-flex counter">
              <h5 className="text-white mt-1">Total clients who love HighTech</h5>
            </div>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
            <div className="d-flex counter">
              <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default FactSection