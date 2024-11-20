// src/pages/Services.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import bannerImage from '../../assets/services-banner-image.jpg';
import { FaCheck } from 'react-icons/fa';

function ServiceCard({ title, description, points }) {
  const navigate = useNavigate();

  return (
    <div className="service-page-card">
      <h3 className="service-page-card-title">{title}</h3>
      <p className="service-page-card-description">{description}</p>
      <ul className="service-page-card-points">
        {points.map((point, index) => (
          <li key={index}>
            <FaCheck className="check-icon" /> {point}
          </li>
        ))}
      </ul>
      <button className="services-cta-button" onClick={() => navigate('/contact')}>Get a Quote</button>
    </div>
  );
}

function Services() {
  const navigate = useNavigate();
  
  const servicesData = [
    {
      title: "Custom Software Development",
      description: "We design and build custom software solutions tailored to your business requirements...",
      points: [
        "Web and mobile applications",
        "Enterprise-level solutions",
        "Fully customized features",
        "Scalable and flexible",
        "End-to-end support"
      ]
    },
    {
      title: "AI and Machine Learning",
      description: "Our AI and machine learning services empower businesses with smart, automated insights and predictive modeling, helping streamline operations, improve decision-making, and integrate AI seamlessly with existing systems.",
      points: [
        "Advanced data analytics",
        "Predictive modeling",
        "Process automation",
        "Custom AI integration",
        "Industry-specific AI solutions"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "We offer secure, scalable cloud solutions including migration, infrastructure setup, and continuous management, allowing businesses to grow without limits while maintaining data security and reliability.",
      points: [
        "Cloud migration and setup",
        "Infrastructure management",
        "Backup and recovery",
        "Scalable growth support",
        "Ongoing cloud maintenance"
      ]
    },
    {
      title: "ERP Systems",
      description: "Our ERP systems streamline operations with modules for finance, HR, and supply chain, tailored to specific industries. Real-time data access improves decision-making and boosts operational efficiency.",
      points: [
        "Financial and HR modules",
        "Supply chain integration",
        "Real-time data access",
        "Industry-specific customization",
        "Enhanced productivity"
      ]
    },
    {
      title: "Data Analytics and Business Intelligence",
      description: "Unlock actionable insights with our data analytics and BI solutions, featuring data visualization, reporting, and real-time metrics to help you make data-driven, strategic business decisions.",
      points: [
        "Data visualization tools",
        "Customizable reports",
        "Real-time dashboards",
        "KPI tracking",
        "Strategic decision support"
      ]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our comprehensive cybersecurity services, offering threat detection, security audits, and risk assessments to keep your business secure and compliant.",
      points: [
        "Security audits and assessments",
        "Threat detection and response",
        "Compliance support",
        "Data encryption protocols",
        "Continuous monitoring"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Banner Section */}
      <section className="banner-section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-overlay">
          <h1>Our Services</h1>
        </div>
      </section>

      {/* Introductory Content Section */}
      <div className="intro-content">
        <h1>Your Trusted IT Solutions Partner</h1>
        <p>
          At TekzAI Solutions, we provide a complete suite of IT solutions designed to empower businesses of every scale to reach their full potential. Our dedicated team of experts is committed to delivering efficient, scalable, and reliable services that streamline your IT operations, enhance productivity, and drive sustainable growth. Whether you're looking to optimize your infrastructure or implement advanced technologies, TekzAI Solutions is here to help you achieve your business goals with ease and confidence.
        </p>
      </div>

      {/* Service Sections */}
      {servicesData.map((service, index) => (
        <section key={index} className="service-page-section" >
          <div className="service-overlay">
            <div className="service-page-details">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <ServiceCard
              title="We Provide The Following Services:"
              description=""
              points={service.points}
            />
          </div>
        </section>
      ))}

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

export default Services;
