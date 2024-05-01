import React from 'react';
import project1 from '../Assets/project1.jpg';
import project2 from '../Assets/project2.jpg';
import project3 from '../Assets/project3.jpg';
import project4 from '../Assets/project4.jpg';
import project5 from '../Assets/project5.jpg';
import project6 from '../Assets/project6.jpg';

function ProjectSection() {
  return (


    <div className="container-fluid py-5 mb-5" >
    <div className="container"  >
      <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }} >
        <h1 className="text-primary">Get In Touch</h1>
        <h1 className="mb-3">Contact for any query</h1>
        <p className="mb-2">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. Although the contact form is currently inactive, you can still get in touch with us through email or phone. We're here to assist you and provide solutions to any queries you may have. Don't hesitate to contact us, and we'll get back to you as soon as possible. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
      </div>
      <div className="contact-detail position-relative p-5" >
        <div className="row g-5 mb-5 justify-content-center" >
          <ContactItem iconClass="fas fa-map-marker-alt" title="Address" link="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" text="Seecs Nust h12, Islamabad" delay=".3s" />
          <ContactItem iconClass="fa fa-phone" title="Call Us" link="tel:+0123456789" text="+012 3456 7890" delay=".5s" />
          <ContactItem iconClass="fa fa-envelope" title="Email Us" link="mailto:info@example.com" text="info@landBlock.com" delay=".7s" />
        </div>
        <div className="row g-5" >
          <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s" >
            <div className="p-5 h-100 rounded contact-map" style={{background: 'linear-gradient(to bottom, #4CAF50, #388E3C)'}}>
              <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
            <div className="p-5 rounded contact-form" style={{background: 'linear-gradient(to bottom, #4CAF50, #388E3C)'}}>
              <div className="mb-4">
                <input type="text" className="form-control border-0 py-3" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <input type="email" className="form-control border-0 py-3" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <input type="text" className="form-control border-0 py-3" placeholder="Project" />
              </div>
              <div className="mb-4">
                <textarea className="w-100 form-control border-0 py-3" rows="6" cols="10" placeholder="Message"></textarea>
              </div>
              <div className="text-start">
                <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

// ContactItem component
function ContactItem({ iconClass, title, link, text, delay }) {
return (
  <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay={delay}>
    <div className="d-flex bg-light p-3 rounded">
      <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{ width: '64px', height: '64px' }}>
        <i className={iconClass + " text-white"}></i>
      </div>
      <div className="ms-3">
        <h4 className="text-primary">{title}</h4>
        <a href={link} target="_blank" className="h5">{text}</a>
      </div>
    </div>
  </div>






  );
}

export default ProjectSection;
