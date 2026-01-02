import React from 'react';
const AboutImage = '/assets/images/about-image.png';
const Dhakshana = '/assets/images/dhakshana.png';
const Biggest = '/assets/images/biggest.png';



const About = () => {
  const SDECartoon = "/assets/images/hrify logo.png";
  return (
    <div>
      {/* Hero Banner Section - Redesigned to match Referral Program style */}
      <div className="banner container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#e6f7ff' }}>
        <div className="row w-100 h-100 gx-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center px-4 py-5">
            <h1 className="fw-bolder mb-0" style={{ fontSize: '4rem', color: '#000', lineHeight: '1.2' }}>
              About<br />Us
            </h1>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-4">
            <img
              className="img-fluid"
              src={AboutImage}
              alt="About JK Global IT Solutions"
              style={{ maxHeight: '520px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Banner Responsive Styles - Matching Referral Program */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            min-height: 600px;
            background-color: #e6f7ff;
          }

          @media (max-width: 992px) {
            .banner h1 {
              font-size: 3.2rem !important;
            }
          }

          @media (max-width: 768px) {
            .banner {
              min-height: 500px;
            }
            .banner h1 {
              font-size: 2.8rem !important;
            }
          }

          @media (max-width: 576px) {
            .banner {
              min-height: 450px;
            }
            .banner h1 {
              font-size: 2.3rem !important;
            }
            .banner img {
              max-height: 300px !important;
            }
          }
        `
      }} />

      {/* About Content Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6">
              <h2 className="text-danger fw-bold mb-4">About JK Global IT Solutions</h2>
              <p className="text-muted">
                JK Global IT Solutions is a leading provider of comprehensive IT services and solutions. With years of experience in the industry, we have established ourselves as a trusted partner for businesses seeking innovative technology solutions.
              </p>
              <p className="text-muted">
                Our team of skilled professionals brings together expertise in software development, web design, cloud computing, cybersecurity, and digital transformation. We are committed to delivering high-quality services that drive business growth and success.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img className="img-fluid" src={SDECartoon} alt="SDE Cartoon" />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-6 order-lg-2">
              <h3 className="text-danger fw-bold mb-4">Our Mission</h3>
              <p className="text-muted">
                To empower businesses with cutting-edge technology solutions that enhance productivity, security, and competitiveness in the digital age.
              </p>
              <p className="text-muted">
                We strive to deliver innovative IT services that not only meet current business needs but also anticipate future challenges and opportunities.
              </p>
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              <img className="img-fluid" src={Dhakshana} alt="Mission" />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h3 className="text-danger fw-bold mb-4">Our Vision</h3>
              <p className="text-muted">
                To be the premier IT solutions provider, recognized for excellence in service delivery, technological innovation, and customer satisfaction.
              </p>
              <p className="text-muted">
                We envision a future where businesses leverage technology seamlessly to achieve their goals and create lasting value for their stakeholders.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img className="img-fluid" src={Biggest} alt="Vision" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-danger fw-bold mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-users fa-3x text-danger mb-3"></i>
                <h4 className="fw-bold mb-3">Expert Team</h4>
                <p className="text-muted">Our certified professionals bring years of experience and expertise to every project.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-cogs fa-3x text-danger mb-3"></i>
                <h4 className="fw-bold mb-3">Customized Solutions</h4>
                <p className="text-muted">We tailor our services to meet your specific business requirements and goals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-clock fa-3x text-danger mb-3"></i>
                <h4 className="fw-bold mb-3">Timely Delivery</h4>
                <p className="text-muted">We are committed to delivering projects on time without compromising quality.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-shield-alt fa-3x text-danger mb-3"></i>
                <h4 className="fw-bold mb-3">Security First</h4>
                <p className="text-muted">We prioritize the security and confidentiality of your data and systems.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-handshake fa-3x text-danger mb-3"></i>
                <h4 className="fw-bold mb-3">Reliable Partnership</h4>
                <p className="text-muted">We build long-term relationships based on trust, transparency, and mutual success.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <i className="fas fa-award fa-3x text-danger mb-3"></i>
                <h4 className="fw-bold mb-3">Proven Track Record</h4>
                <p className="text-muted">Our satisfied clients and successful projects speak to our commitment to excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5 bg-danger text-white text-center">
        <div className="container">
          <h3 className="fw-bold mb-3">Ready to Transform Your Business?</h3>
          <p className="mb-4">Contact us today to discuss how we can help you achieve your technology goals.</p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3 fw-bold">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default About;
