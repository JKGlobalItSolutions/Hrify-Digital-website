import React from 'react';
import { Link } from 'react-router-dom';
import Rectangle27 from '../assets/images/Rectangle-27.png';
import AwsImage1 from '../assets/images/aws-image-1.png';
import AwsImage2 from '../assets/images/aws-image-2.png';
import AIm1 from '../assets/images/a-im-1.png';
import AIm2 from '../assets/images/a-im-2.png';
import AIm3 from '../assets/images/a-im-3.png';
import AIm4 from '../assets/images/a-im-4.png';
import AIm5 from '../assets/images/a-im-5.png';
import AIm6 from '../assets/images/a-im-6.png';
import AIm7 from '../assets/images/a-im-7.png';
import AIm8 from '../assets/images/a-im-8.png';
import AIm9 from '../assets/images/a-im-9.png';
import AIm10 from '../assets/images/a-im-10.png';
import AIm11 from '../assets/images/a-im-11.png';
import AIm12 from '../assets/images/a-im-12.png';
import Construction from '../assets/images/construction.png';
import Trip from '../assets/images/trip.png';


















const AWSImplementations = () => {
  return (
    <main>
      {/* Banner section */}
      <div className="banner container-fluid" style={{backgroundColor:'#e1f561ff'}}>
        <div className="row h-100 p-lg-5">
          <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light">
            <h2 style={{ color: 'black' }} className="fw-bolder text-center">AWS Services Implementations</h2>
            <style dangerouslySetInnerHTML={{
              __html: `
                h2 {
                    font-size: 36px;
                    color: black;
                }

                @media only screen and (max-width: 600px) {
                    h2 {
                        font-size: 24px;
                    }
                }
              `
            }} />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={AwsImage1} alt="" />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner {
            background-image: url(${Rectangle27});
            height: 300px;
          }
        `
      }} /> <br/>

      {/* Content Section */}
      <div className="container">
        <div className="row p-lg-4 p-2 align-items-center justify-content-center">
          <div className="col-12 col-lg-9">
            <p style={{ color: '#686D76' , textAlign:'justify'}}> Amazon Web Services (AWS) has significantly impacted the cloud market and is now the preferred choice for businesses ranging from startups to large corporations. As a partner, JK Global IT Solution offers expertise in leveraging AWS advantages for your business. We specialize in providing dedicated support to implement AWS Solutions tailored to enhance your operational efficiency and scalability.</p>
          </div>
          <div className="col-12 col-lg-3 my-5 my-lg-0 justify-content-center">
            <img className="img-fluid" src={AwsImage2} alt="" />
          </div>
        </div>
      </div> <br/>

      <div className="container">
        <div className="row text-center">
          <h3 style={{ fontWeight: '700' }}>Services offered by Amazon</h3> <br/> <br/>
        </div>
        <div className="row text-center align-items-center">
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={AIm1} alt="" />
            <h3 style={{ color: '#686D76' }}>Computer</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={Construction} alt="" />
            <h3 style={{ color: '#686D76' }}>Developer Tools</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={AIm3} alt="" />
            <h3 style={{ color: '#686D76' }}>Management Tools</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={AIm4} alt="" />
            <h3 style={{ color: '#686D76' }}>Internet of Things</h3>
          </div>
        </div>
        <div className="row text-center align-items-center">
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={AIm5} alt="" />
            <h3 style={{ color: '#686D76' }}>Storage</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={AIm6} alt="" />
            <h3 style={{ color: '#686D76' }}>Security Identity &<br />Compliance</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={AIm7} alt="" />
            <h3 style={{ color: '#686D76' }}>Application Services</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center p-4">
            <img src={AIm8} alt="" />
            <h3 style={{ color: '#686D76' }}>Desktop & App<br />Streaming</h3>
          </div>
        </div>
        <div className="row text-center align-items-center">
          <div className="col-12 col-lg-3 justify-content-center">
            <img src={AIm9} alt="" />
            <h3 style={{ color: '#686D76' }}>Database</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center">
            <img src={AIm10} alt="" />
            <h3 style={{ color: '#686D76' }}>Analytics</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center">
            <img src={AIm11} alt="" />
            <h3 style={{ color: '#686D76' }}>Messaging</h3>
          </div>
          <div className="col-12 col-lg-3 justify-content-center">
            <img src={AIm12} alt="" />
            <h3 style={{ color: '#686D76' }}>Game Development</h3>
          </div>
        </div>
      </div> <br/> <br/>

      <div className="container mobile-only">
        <h1 style={{ color: '#686D76', textAlign: 'center' }}>Prime Commercial Services</h1>
        <br /><br /><br />
        <div className="row justify-content-center gx-3">
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/domains">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Domains, Hosting and Cloud
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/personalemail">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Personal and Enterprise Email
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/googlework">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Google Apps and Services
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/emailcampaign">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Email Campaign Management
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/awsimpl">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                AWS Services Implementations
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/designbranding">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Design and Branding
              </span>
            </Link>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <Link style={{ textDecoration: 'none' }} to="/digitalmarketing">
              <span className="box">
                <img src={Trip} alt="" className="me-2" />
                Digital Marketing and Social Media
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style>
        {`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `}
      </style>
    </main>
  );
};

export default AWSImplementations;
