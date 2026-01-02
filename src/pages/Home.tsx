import React, { useEffect } from 'react';
import './Home.css';
const Banner2 = '/assets/images/newBanner/cy10.webp';
const Banner3 = '/assets/images/newBanner/cy11.webp';
const Banner4 = '/assets/images/newBanner/cy12.webp';
const Banner5 = '/assets/images/newBanner/cy13.webp';
const Banner7 = '/assets/images/newBanner/cy14.webp';
const Enterprise = '/assets/images/newBanner/enterprise.webp';
const Cybersecurity = '/assets/images/newBanner/cy15.webp';
const Blockchain = '/assets/images/newBanner/bl7.webp';
const Managed = '/assets/images/newBanner/ma.ser.webp';
const DataAnalytics = '/assets/images/newBanner/data.an.webp';
const Img32 = '/assets/images/Talent/img3-(2).webp';
const Im7 = '/assets/images/Talent/im7.webp';
const Icon32 = '/assets/images/Talent/icon3-(2).webp';
const Icon42 = '/assets/images/Talent/icon4-(2).webp';
const Icon52 = '/assets/images/Talent/icon5-(2).webp';
const Icon62 = '/assets/images/Talent/icon6-(2).webp';

const Home = () => {
  useEffect(() => {
    // Slider script
    const slides = document.querySelector('.slides') as HTMLElement;
    if (!slides) return;
    const slideCount = document.querySelectorAll('.slide').length;
    const slideWidth = 100;
    let currentIndex = 0;
    let slideInterval: ReturnType<typeof setInterval>;

    const goToSlide = (index: number) => {
      slides.style.transition = 'transform 0.5s ease';
      slides.style.transform = `translateX(-${index * slideWidth}%)`;
      currentIndex = index;
      if (index >= slideCount / 2) {
        setTimeout(() => {
          slides.style.transition = 'none';
          slides.style.transform = 'translateX(0)';
          currentIndex = 0;
        }, 500);
      }
    };

    const nextSlide = () => {
      goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      } else {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${(slideCount / 2 - 1) * slideWidth}%)`;
        currentIndex = slideCount / 2 - 1;
        setTimeout(() => {
          slides.style.transition = 'transform 0.5s ease';
          goToSlide(currentIndex - 1);
        }, 0);
      }
    };

    const startSlideShow = () => {
      slideInterval = setInterval(nextSlide, 6000);
    };

    const stopSlideShow = () => {
      clearInterval(slideInterval);
    };

    document.querySelector('.next')?.addEventListener('click', () => {
      nextSlide();
      stopSlideShow();
      startSlideShow();
    });

    document.querySelector('.prev')?.addEventListener('click', () => {
      prevSlide();
      stopSlideShow();
      startSlideShow();
    });

    startSlideShow();

    return () => {
      stopSlideShow();
    };
  }, []);

  return (
    <div>
      {/* Banner section */}
      <div className="slider">
        <div className="slides">
          <div className="slide"><img src={Banner2} alt="Slide 2" /></div>
          <div className="slide"><img src={Banner3} alt="Slide 3" /></div>
          <div className="slide"><img src={Banner4} alt="Slide 4" /></div>
          <div className="slide"><img src={Banner5} alt="Slide 5" /></div>
          <div className="slide"><img src={Banner7} alt="Slide 7" /></div>
          <div className="slide"><img src={Enterprise} alt="Enterprise" /></div>
          <div className="slide"><img src={Cybersecurity} alt="Cybersecurity" /></div>
          <div className="slide"><img src={Blockchain} alt="Blockchain" /></div>
          <div className="slide"><img src={Managed} alt="Managed" /></div>
          <div className="slide"><img src={DataAnalytics} alt="DataAnalytics" /></div>
          {/* Duplicates for seamless scrolling */}
          <div className="slide"><img src={Banner2} alt="Slide 2" /></div>
          <div className="slide"><img src={Banner3} alt="Slide 3" /></div>
          <div className="slide"><img src={Banner4} alt="Slide 4" /></div>
          <div className="slide"><img src={Banner5} alt="Slide 5" /></div>
          <div className="slide"><img src={Banner7} alt="Slide 7" /></div>
          <div className="slide"><img src={Enterprise} alt="Enterprise" /></div>
          <div className="slide"><img src={Cybersecurity} alt="Cybersecurity" /></div>
          <div className="slide"><img src={Blockchain} alt="Blockchain" /></div>
          <div className="slide"><img src={Managed} alt="Managed" /></div>
          <div className="slide"><img src={DataAnalytics} alt="DataAnalytics" /></div>
        </div>
        <button className="nav-button prev">&#10094;</button>
        <button className="nav-button next">&#10095;</button>
      </div>

      {/* Content Sections */}
      <div className="container p-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <h3 className="fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Software Development</h3>
            <p style={{ fontFamily: 'urbanist' }}>
              Our Software Development Services turn your ideas into innovative, functional, and scalable solutions tailored to your business needs. We provide end-to-end services, including requirements analysis, design, development, testing, and deployment, ensuring a seamless process. Using the latest technologies and agile methodologies, we deliver secure, efficient, and user-friendly software. Whether you need custom applications, system integration, or software enhancements, our solutions are designed to streamline operations, boost productivity, and drive business success.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <img className="img-fluid" src={Img32} alt="" />
          </div>
        </div>
      </div>

      {/* More sections can be added here */}

      {/* Services Grid */}
      <div className="services-container mt-5">
        <h1 className="services-title">OUR DIGITAL SERVICES</h1>
        <div className="services-grid">
          <div className="service-card">
            <img className="img-fluid w-25 mb-3" src={Icon32} alt="" />
            <div className="service-title-box title-dark-purple">
              <h3 className="service-name">Software Development</h3>
            </div>
            <p className="service-description">We deliver innovative, scalable software solutions tailored to your needs, covering everything from design and development to testing and deployment. With cutting-edge technologies and agile methods, we create secure, user-friendly applications that enhance efficiency and drive business growth.</p>
          </div>
          <div className="service-card">
            <img className="img-fluid w-25 mb-3" src={Icon42} alt="" />
            <div className="service-title-box title-pink">
              <h3 className="service-name">Web Development</h3>
            </div>
            <p className="service-description">JK Global IT Solutions provides reliable website maintenance services to keep your site updated, error-free, and running smoothly. Our expert team ensures a seamless user experience with regular updates and technical support, allowing you to focus on your business priorities.</p>
          </div>
          <div className="service-card">
            <img className="img-fluid w-25 mb-3" src={Icon52} alt="" />
            <div className="service-title-box title-purple">
              <h3 className="service-name">App Development</h3>
            </div>
            <p className="service-description">JK Global IT Solutions provides reliable website maintenance services to keep your site updated, error-free, and running smoothly. Our expert team ensures a seamless user experience with regular updates and technical support, allowing you to focus on your business priorities.</p>
          </div>
          <div className="service-card">
            <img className="img-fluid w-25 mb-3" src={Icon62} alt="" />
            <div className="service-title-box title-dark-purple">
              <h3 className="service-name">Networking Solution</h3>
            </div>
            <p className="service-description">We offer tailored networking solutions, from design and implementation to security and maintenance, ensuring secure, scalable connectivity that boosts efficiency and supports business growth.</p>
          </div>
          {/* Add more service cards */}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container p-lg-5 p-3">
        <h3 className="text-center fw-bolder" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why Choose Us?</h3>
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Commitment to core values and mission empowers clients with effective solutions.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp; Maintaining client trust and delivering exceptional results consistently.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Skilled experts and established processes ensure efficient business support.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Prioritizing clients' technological investments for optimal outcomes.
            </p>
            <p className="fw-bolder" style={{ color: '#686D76' }}>
              <i className="fa fa-circle-o" style={{ fontSize: '20px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i> &nbsp;Leading software development company in Tiruvannamalai, dedicated to client satisfaction.
            </p>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <img className="img-fluid col-9 text-end" src={Im7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
