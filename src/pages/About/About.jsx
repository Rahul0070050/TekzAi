import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './About.css';
import bannerImage from "../../assets/about_us_banner_image.jpg";
import profilePlaceholder from "../../assets/Blank-profile-image.jpg"; 


function About() {

  const navigate = useNavigate();

  
  const slides = [
    { title: "Expertise & Innovation", description: "Cutting-edge tech solutions tailored to your needs." },
    { title: "Tailored Solutions", description: "Custom-fit services to align with your business goals." },
    { title: "Client-Centric Approach", description: "Your success is our priority at every step." },
    { title: "End-to-End Support", description: "Seamless support from start to finish and beyond." },
    { title: "Security & Reliability", description: "Secure, scalable solutions you can trust." }
  ];

  const testimonials = [
    {
      quote: "Our experience with TekzAI’s AI and machine learning services was outstanding. They developed predictive models that have streamlined our inventory management and improved patient care. Their expertise in data science was evident at every stage, and we saw a direct impact on efficiency. They’re a reliable partner we trust.",
      name: ". Abdullah Al Marri",
    },
    {
      quote: "With the TKZ-AMT asset management tool, TekzAI Solutions has taken our asset tracking capabilities to a whole new level. The real-time alerts and lifecycle management features have streamlined our operations and reduced maintenance costs. The ease of integration and user-friendly interface make it a highly effective tool. I am extremely pleased with the results!",
      name: "Shinto Mathew",
    },
    {
      quote: "I had a great experience with TekzAI! They have a highly competent and skilled team in place. A very professional organization where the customer is the top priority.",
      name: "Fatima Al Hashimi",
    },
    {
      quote: "TekzAI Solutions provided exceptional custom software development services for our business. From the initial consultation to deployment, their team showed deep technical knowledge and a commitment to meeting our unique requirements. The solution they delivered has been a vital part of our growth strategy, and we couldn’t be happier with the partnership.",
      name : "Sameer Kaur"
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerMode: false, // Disable center mode for responsive view
    nextArrow: <div className="custom-slick-next"><span>›</span></div>,
    prevArrow: <div className="custom-slick-prev"><span>‹</span></div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Disable arrows on mobile for a cleaner look
          centerMode: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="banner-section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-overlay">
          <h1>About Us</h1>
        </div>
      </section>
   

      {/* "Who We Are" Section */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>Welcome to TekzAI Solutions, a pioneering cloud application development company dedicated to transforming businesses through innovative digital solutions.</p>
        <p> Founded with a mission to empower organizations of all sizes, we specialize in custom software development, AI and machine learning, cloud solutions, ERP and CRM systems, and data analytics. </p>
        <p>Our expert team is committed to understanding each client’s unique challenges, providing personalized services that drive growth, efficiency, and competitive advantage. At TekzAI, we pride ourselves on delivering reliable, secure, and scalable solutions that allow businesses to thrive in an increasingly digital world. </p>
        <p>Partner with us to experience technology-driven excellence and a seamless journey toward your business goals.</p>
        <div className="who-we-are-buttons">
          <button className="primary-button" onClick={() => window.location.href = '/products'}>Our Products</button>
          <button className="secondary-button" onClick={() => window.location.href = '/services'}>Our Services</button>
        </div>
      </section>

      
      {/* Why TekzAi Section */}
      <section className="why-tekzai-section">
        <h2>Why TekzAi?</h2>
        <Slider {...carouselSettings} className="carousel">
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Mission Section */}
      <section className="mission-vision">
        <h2>Mission</h2>
        <p>
          Our mission is to empower businesses with innovative digital solutions that enhance productivity, drive sustainable growth, 
          and foster technological advancement. We strive to deliver reliable, secure, and tailored services that align with each 
          client's unique needs, helping them achieve operational excellence and a competitive edge in their industry.
        </p>
      </section>


      {/* Core Values Section */}
      <section className="team-section">
        <h2>Our Core Values</h2>
        <div className="card-container">
          <div className="about-card">
            <h3>Innovation</h3>
            <p>We embrace technology to drive growth and create impactful solutions.</p>
          </div>
          <div className="about-card">
            <h3>Integrity</h3>
            <p>Trust and transparency are at the heart of our relationships.</p>
          </div>
          <div className="about-card">
            <h3>Customer Success</h3>
            <p>We focus on our clients’ goals and strive to exceed their expectations.</p>
          </div>
        </div>
      </section>

          {/* Customer Testimonials Section */}
          <section className="testimonials-section">
        <h2>Customer Testimonials</h2>
        <h3>Read why we do what we do.</h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img
                  src={profilePlaceholder}
                  alt="Profile"
                  className="testimonial-profile-pic"
                />
                <div className="author-info">
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* CTA Section */}
       <section className="cta-section">
        <div className="cta-content">
          <h2>Simplify your IT environment!</h2>
          <p>Schedule a free consultation to learn more about how we can ease your tasks.</p>
          <button className="cta-button" onClick={() => navigate('/contact')}>Contact us</button>
        </div>
      </section>
    </div>
  );
}

export default About;
