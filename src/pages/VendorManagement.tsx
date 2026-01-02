import React from 'react';
import VendorManagement from '../assets/images/Vendor-Management.png';

const VendorManagement = () => {
  return (
    <main>
      {/* Updated Banner Section - Properly Aligned & Responsive */}
      <div className="banner container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#e6f7ff' }}>
        <div className="row w-100 h-100 gx-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center px-4 py-5">
            <h2 className="fw-bolder mb-0" style={{ fontSize: '4rem', color: '#000', lineHeight: '1.2' }}>
              Vendor Relations
            </h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-4">
            <img
              className="img-fluid"
              src={VendorManagement}
              alt="Vendor Management"
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
              text-align: justify;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
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

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #f30000;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #d32f2f;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #f30000, #c50000);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #f30000;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}
        </style>

        {/* Hero Section Below Banner */}
        <div className="text-justify">
          <h1 className="main-title">
            Vendor Management
          </h1>
          <p className="main-subtitle">
            Manage Contracts, Risk & Procurement With Vendor Management
          </p>
          <p className="main-subtitle">
            Identify new technological breakthroughs and experience our ongoing support for your business value. Our expert vendor management services help streamline processes, mitigate risks, and enhance cost efficiencies.
          </p>

          <p className="main-subtitle">
            At JK Global IT Solutions, we ensure effective vendor selection and contract management, reducing operational risks and maximizing business efficiency. Our team fosters strong vendor relationships by maintaining transparency and adhering to industry best practices. By leveraging innovative vendor management strategies, we help businesses gain a competitive edge and optimize resources for sustainable growth.
          </p>

          <p className="main-subtitle">
            Our vendor management solutions empower businesses by integrating automation, data-driven decision-making, and customized procurement strategies. Whether you're seeking better contract negotiations or improving supplier performance, our expert solutions ensure seamless and strategic vendor operations.
          </p>
        </div>

        {/* Key Features Section */}
        <section className="section" style={{ backgroundColor: '#fff5f5' }}>
          <div className="container">
            <h2 className="section-title">Key Capabilities</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Vendor Relationship Management</h4>
                <p>Strengthen vendor relationships through structured management and consistent communication.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Risk Management</h4>
                <p>Mitigate potential vendor risks through careful assessment and proactive strategies.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Supplier Diversity</h4>
                <p>Promote inclusivity and growth with a diverse vendor and supplier network.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Vendor Performance Monitoring</h4>
                <p>Track vendor performance with KPI-aligned assessments and regular feedback mechanisms.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Integration & Data Management</h4>
                <p>Leverage integrated vendor platforms for secure data exchange and governance adherence.</p>
              </div>

              <div className="feature-card">
                <div className="icon-wrapper">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h4>Vendor Consolidation</h4>
                <p>Optimize vendor relationships by identifying consolidation opportunities based on performance and cost.</p>
              </div>
            </div>

            <a href="#contact" className="cta-button">
              Consult Our Experts
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Optimize Your Vendor Relationships?</h2>
            <p>Let us help you streamline procurement, reduce risks, and drive greater value from your vendors.</p>
            <a href="#contact" className="btn-white">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default VendorManagement;