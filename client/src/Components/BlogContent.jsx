import React from 'react'
import About from '../Assets/About.jpg'
import Working from '../Assets/Working.png'
function BlogContent() {
  return (


    <div>

    <div className="container-fluid py-5 my-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                    <div className="h-100 position-relative">
                        <img src={About} className="img-fluid w-75 rounded" alt="" style={{marginbottom: '25%'}}/>
                        <div className="position-absolute w-75" style={{top: '25%', left: '25%;'}}>
                            <img src="img/about-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                    <h5 className="text-primary">About Us</h5>
                 
                    <p>At Land Block, our mission is simple yet profound: to empower individuals, governments, and organizations with innovative tools that enhance trust and streamline property transactions. Guided by a set of core values including integrity, innovation, and customer-centricity, we strive to exceed expectations and deliver unparalleled value to our clients.</p>
                    <p className="mb-4">Behind our cutting-edge technology stands a team of passionate individuals, each bringing a unique set of skills and expertise to the table. From blockchain developers to real estate specialists, legal advisors to customer support professionals, our diverse team is united by a common goal: to revolutionize the property industry and drive positive change on a global scale.</p>
                </div>
            </div>
        </div>
    </div>




    <div className="container-fluid py-5 my-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
            <h5 className="text-primary">Smart Contract Development:</h5>
            <p>Smart contracts are created using Solidity to define the rules and operations of the land registry system. These smart contracts are deployed on a blockchain network, such as Ethereum.</p>
          
            <h5 className="text-primary">Land Ownership Representation:</h5>
            <p>Each piece of land is represented by a unique digital asset or token on the blockchain. These tokens serve as digital representations of land ownership rights.</p>

            <h5 className="text-primary">Property Information Recording:</h5>
            <p>Property information, including details such as ownership records, land boundaries, and transaction history, is recorded on the blockchain. This information is immutable and transparent, providing a reliable source of truth for land ownership.</p>


            <h5 className="text-primary">Ownership Transfer:</h5>
            <p>Transferring ownership of land involves updating the ownership records stored in the smart contract. This process typically requires the consent of both the seller and the buyer, and the transaction is recorded on the blockchain.</p>


            <h5 className="text-primary">Verification and Authentication:</h5>
            <p>Smart contracts can include verification mechanisms to ensure the authenticity of land ownership transactions. For example, digital signatures or multi-signature schemes can be used to authenticate parties involved in land transactions.</p>
          
          
          
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img src={Working} className="img-fluid w-75 rounded mt-16" alt="" style={{ marginBottom: '25%' }} />
              <div className="position-absolute w-75" style={{ top: '25%', right: '25%' }}>
                <img src="img/about-2.jpg" className="img-fluid w-100 rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    </div>

    
  );
}

export default BlogContent;