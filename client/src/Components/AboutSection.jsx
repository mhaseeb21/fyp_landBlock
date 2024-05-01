import React from 'react';

function AboutSection() {
  return (
    <div className="container-fluid py-5 my-5">
      <div className="container pt-5">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-12">
            <h1 className="text-center text-primary mb-4"><b>About Us</b></h1>
            <h2 className="text-center mb-4">LandBlock an Innovative IT Solutions</h2>
            <p className="mb-4">At LandBlock, we are committed to transforming the landscape of land registry through cutting-edge blockchain technology. With a passion for innovation and a dedication to transparency, we aim to revolutionize the way property ownership is recorded and managed. Our team of experts combines expertise in blockchain development, real estate, and legal fields to create a seamless, secure, and efficient land registry solution. By harnessing the power of blockchain, we ensure immutable records, eliminate fraudulent practices, and streamline the process of buying, selling, and transferring property rights. Join us in shaping the future of land management, where trust, efficiency, and transparency are paramount.</p>
            <p className="mb-4">Our platform empowers individuals, governments, and organizations to confidently participate in property transactions, knowing that their rights are protected and transactions are conducted with utmost integrity. With our user-friendly interface and robust security measures, we aim to democratize access to land ownership data, fostering economic growth and social progress in communities worldwide</p>
            <div className="text-center">
              <a href="#" className="btn btn-success rounded-pill px-5 py-3 text-white">More Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
