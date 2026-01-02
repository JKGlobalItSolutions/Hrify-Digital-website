import React from 'react';
import ZeroTrust1 from '../assets/images/Banner/newbanimg/zero-trust-1.png';

const ZeroTrustArchitecture = () => {
  return (
    <main>
      {/* Updated Banner Section - Properly Aligned & Responsive */}
      <div className="banner container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#85fa87ff' }}>
        <div className="row w-100 h-100 gx-0">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center px-4 py-5">
            <h2 className="fw-bolder mb-0" style={{ fontSize: '4rem', color: '#000', lineHeight: '1.2' }}>
              Access Secured.<br />Trust Removed
            </h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-4">
            <img
              className="img-fluid"
              src={ZeroTrust1}
              alt="Zero Trust Architecture"
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
            background-color: #85fa87ff;
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

            .btn-group {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1.5rem;
              margin: 3rem 0;
            }

            .btn-primary {
              background-color: #f30000;
              color: white;
              padding: 0.9rem 2rem;
              border-radius: 9999px;
              font-weight: 600;
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            }

            .btn-primary:hover {
              background-color: #c50000;
            }

            .btn-outline {
              border: 2px solid #333;
              color: #333;
              background: transparent;
              padding: 0.9rem 2rem;
              border-radius: 9999px;
              font-weight: 600;
              text-decoration: none;
            }

            .btn-outline:hover {
              background: #333;
              color: white;
            }

            .feature-grid {
              background: #f0f0f0;
              border-radius: 16px;
              padding: 2rem;
              max-width: 500px;
              margin: 0 auto;
            }

            .grid-2col {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }

            .feature-box {
              text-align: center;
              padding: 1rem;
            }

            .feature-box i {
              font-size: 2.8rem;
              color: #f30000;
              margin-bottom: 0.8rem;
            }

            .feature-box h3 {
              font-size: 1.1rem;
              font-weight: 600;
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

            .card-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .card-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .card {
              background: white;
              border: 1px solid #eaeaea;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
            }

            .card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.12);
            }

            .card i {
              font-size: 3rem;
              color: #f30000;
              margin-bottom: 1.2rem;
            }

            .card-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #333;
              margin-bottom: 1rem;
            }

            .card-body p {
              color: #666;
              line-height: 1.7;
            }

            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 3rem;
            }

            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            .feature-item {
              display: flex;
              gap: 1.5rem;
              align-items: start;
            }

            .feature-icon {
              width: 60px;
              height: 60px;
              background: #ffeaea;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }

            .feature-icon i {
              font-size: 1.8rem;
              color: #f30000;
            }

            .feature-content h3 {
              font-size: 1.3rem;
              font-weight: 600;
              margin-bottom: 0.8rem;
            }

            .feature-content p {
              color: #666;
              line-height: 1.7;
            }

            .cta-section {
              background: linear-gradient(135deg, #f30000, #c50000);
              color: white;
              padding: 5rem 0;
              text-align: center;
            }

            .cta-content h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .cta-content p {
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
              transform: scale(1.05);
            }
          `}
        </style>

        {/* Hero Content Below Banner */}
        <div className="text-center">
          <h1 className="main-title">
            Get Your Access Authorized, Encrypted, & Secured With Zero Trust Architecture
          </h1>
          <p className="main-subtitle">
            Minimize the attack surface, prevent data breaches, and eliminate threats with JK Global IT Solution's comprehensive Zero Trust approach.
          </p>

          <div className="btn-group">
            <a href="#contact" className="btn-primary">
              Talk to Our Expert
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="#learn-more" className="btn-outline">Learn More</a>
          </div>

          {/* Feature Boxes Grid */}
          <div className="feature-grid">
            <div className="grid-2col">
              <div className="feature-box">
                <i className="fas fa-shield-alt"></i>
                <h3>Verify Identity</h3>
              </div>
              <div className="feature-box">
                <i className="fas fa-lock"></i>
                <h3>Control Risk</h3>
              </div>
              <div className="feature-box">
                <i className="fas fa-check-circle"></i>
                <h3>Enforce Policy</h3>
              </div>
              <div className="feature-box">
                <i className="fas fa-eye"></i>
                <h3>Monitor Access</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="section-title">Streamlined Zero Trust Implementation</h2>
            <p className="section-intro">
              JK Global IT Solution simplifies Zero Trust Architecture implementation and offers tailored solutions to tackle implementation challenges. We assess compatibility, upgrade legacy systems, and prioritize user experience with friendly authentication and training.
            </p>

            <div className="card-grid">
              <div className="card">
                <i className="fas fa-shield-alt"></i>
                <h3 className="card-title">Comprehensive Security</h3>
                <p className="card-body">
                  We tackle cultural resistance, optimize resources, and ensure seamless integration for a highly effective ZTA implementation.
                </p>
              </div>

              <div className="card">
                <i className="fas fa-chart-bar"></i>
                <h3 className="card-title">Customized Monitoring</h3>
                <p className="card-body">
                  Our customized monitoring, automation, and communication enable successful change management and ongoing security.
                </p>
              </div>

              <div className="card">
                <i className="fas fa-users"></i>
                <h3 className="card-title">Expert Training</h3>
                <p className="card-body">
                  Trust JK Global IT Solution for effective implementation of Zero Trust Architecture with comprehensive training and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Features Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">Support Features</h2>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="feature-content">
                  <h3>Comprehensive Implementation Strategy</h3>
                  <p>JK Global IT Solution creates customized implementation plans for clients to implement Zero Trust Architecture and offers guidance and support throughout the process.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="feature-content">
                  <h3>Legacy Systems</h3>
                  <p>JK Global IT Solution assesses client legacy systems for compatibility with Zero Trust principles. We help clients upgrade or replace systems and give modernization recommendations.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-content">
                  <h3>User Experience</h3>
                  <p>JK Global IT Solution designs user-friendly authentication methods tailored to clients' needs and offers expertise in implementing these technologies with training and documentation.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="feature-content">
                  <h3>Tackling Cultural Resistance</h3>
                  <p>JK Global IT Solution creates change management strategies for organizational culture and customized communication plans, showcasing successful Zero Trust implementations.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <div className="feature-content">
                  <h3>Visibility & Monitoring</h3>
                  <p>JK Global IT Solution offers customizable security monitoring solutions to meet clients' specific needs and regulatory requirements with real-time visibility into network traffic.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="feature-content">
                  <h3>Change Management</h3>
                  <p>JK Global IT Solution develops customized communication plans for clients, with industry-specific training and resources to address challenges during implementation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Secure Your Organization?</h2>
              <p>Trust our expertise for a streamlined and highly effective Zero Trust Architecture implementation.</p>
              <a href="#contact-form" className="btn-white">
                Talk to Our Expert Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ZeroTrustArchitecture;