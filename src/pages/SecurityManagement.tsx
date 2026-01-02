import React from 'react';
const SecurityManagementImg = '/assets/images/security-management.png';

const SecurityManagement = () => {
  return (
    <main>
      {/* Updated Banner Section - Properly Aligned & Responsive */}
      <div className="banner container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#e6f7ff' }}>
        <div className="row w-100 h-100 gx-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center px-4 py-5">
            <h2 className="fw-bolder mb-0" style={{ fontSize: '4rem', color: '#000', lineHeight: '1.2' }}>
              Security<br />Operations
            </h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-4">
            <img
              className="img-fluid"
              src={SecurityManagementImg}
              alt="Security Management"
              style={{ maxHeight: '520px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Banner-specific responsive styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            min-height: 600px;
            background-color: #e6f7ff;
          }

          @media (max-width: 992px) {
            .banner h2 {
              font-size: 3.2rem !important;
            }
          }

          @media (max-width: 768px) {
            .banner {
              min-height: 500px;
            }
            .banner h2 {
              font-size: 2.8rem !important;
            }
          }

          @media (max-width: 576px) {
            .banner {
              min-height: 450px;
            }
            .banner h2 {
              font-size: 2.3rem !important;
            }
            .banner img {
              max-height: 300px !important;
            }
          }
        `
      }} />

      <div className="container py-5">
        <style>
          {`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #d32f2f;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #f30000;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #f30000;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #c50000;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #d32f2f;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .service-card {
              background: white;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
              margin-bottom: 2rem;
            }

            .managed-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .managed-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: left;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .managed-card:hover {
              transform: translateY(-8px);
            }

            .managed-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #d32f2f;
              margin-bottom: 1rem;
            }

            .managed-card p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 1.5rem;
            }

            .managed-card a {
              color: #f30000;
              font-weight: 600;
              text-decoration: none;
            }

            .managed-card a:hover {
              text-decoration: underline;
            }
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            Managed Services
          </h1>
          <p className="main-subtitle">
            Protect Your Investments & Accelerate The Outcomes With Managed Services
          </p>
          <p className="main-subtitle">
            Boost success and keep your business ahead with trusted managed services.
          </p>

          <div className="tags-container">
            <div className="tag-btn">Cloud Managed Services</div>
            <div className="tag-btn">Endpoint Management</div>
            <div className="tag-btn">Data Center Management</div>
          </div>

          <p className="section-intro">
            In today's volatile business environment, having a dependable IT infrastructure to support your operations is critical. With JK Global IT Solutions managed services, businesses can ensure their systems run efficiently and securely.
          </p>
        </div>

        {/* Managed Services Grid */}
        <section className="section">
          <div className="container">
            <div className="managed-grid">
              <div className="managed-card">
                <h4>Security Management</h4>
                <p>Fortifying Your Business at Every Step</p>
                <a href="#">Know More →</a>
              </div>

              <div className="managed-card">
                <h4>Monitoring & Maintenance</h4>
                <p>Maximize Performance With the Full Spectrum of Monitoring & Maintenance</p>
                <a href="#">Know More →</a>
              </div>

              <div className="managed-card">
                <h4>Cloud Services</h4>
                <p>Empower A Seamless Business With JK Global IT Solutions Cloud Services</p>
                <a href="#">Know More →</a>
              </div>

              <div className="managed-card">
                <h4>Vendor Management</h4>
                <p>Streamline Your IT Operations With Vendor Management Expertise</p>
                <a href="#">Know More →</a>
              </div>

              <div className="managed-card">
                <h4>Site Reliability Engineering</h4>
                <p>Embrace The Unwavering Software Performance With JK Global IT Solutions</p>
                <a href="#">Know More →</a>
              </div>

              <div className="managed-card">
                <h4>Help Desk/End User Compute</h4>
                <p>Streamline Operations with Reliable Help Desk Support</p>
                <a href="#">Know More →</a>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SecurityManagement;
