import React from 'react';

function AboutSection2() {
  return (
    <div className="container-fluid py-5 my-5">
      <div className="container pt-5">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-7 col-md-8">
            <h1 className="text-center text-primary mb-4"><b>How It Works</b></h1>
            <h2 className="text-center mb-4">LandBlock an Innovative IT Solutions</h2>
            <p className="mb-4">Utilizing our blockchain-powered land registry solution is simple and transparent. First, users submit their property details, including ownership documents and relevant information, securely stored on the blockchain. Through cryptographic verification, these details are immutable, ensuring the integrity of each record. Next, our smart contract technology facilitates seamless transactions, allowing for the transfer of property rights with minimal intermediary involvement. This decentralized approach not only expedites the process but also eliminates the risk of fraudulent activities, fostering a trusted environment for property transactions.</p>
            <p className="mb-4">our platform provides users with real-time access to their property records, empowering them with transparency and control over their assets. Through intuitive interfaces and robust security measures, users can easily manage their properties, track ownership history, and verify the legitimacy of transactions. By leveraging the power of blockchain technology, we offer a revolutionary solution to traditional land registry systems, revolutionizing the way property ownership is recorded and managed with efficiency, security, and trust.</p>
            <div className="text-center">
              <a href="#" className="btn btn-success rounded-pill px-5 py-3 text-white">More Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection2;
