import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import bannerImage from '../../assets/products-banner-image.webp';
import CRMlogo from '../../assets/p-3.png'; 
import AMTlogo from '../../assets/p-2.png'; 
import BKSlogo from '../../assets/p-5.png'; 
import LMSlogo from '../../assets/p-1.png'; 
import MAPTlogo from '../../assets/p-4.png'; 
import { FaCheck } from 'react-icons/fa'; 


function ProductCard({ title, description, features, logo }) {
  const navigate = useNavigate();

  return (
    <div className="product-section">
      <div className="product-overlay">
        {/* Product Logo */}
        <div className="product-logo">
          <img src={logo} alt={`${title} Logo`} />
        </div>
        
        {/* Product Details */}
        <div className="product-details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        
        {/* Product Features */}
        <div className="product-features-card">
          <h3>Product Features</h3>
          <ul className="product-features-list">
            {features.map((feature, index) => (
              <li key={index}>
                <FaCheck className="check-icon" /> {feature}
              </li>
            ))}
          </ul>
          <button className="products-cta-button" onClick={() => navigate('/contact')}>
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const navigate = useNavigate();

  const productsData = [
    {
      title: "TKZ-LMS (Learning Management System)",
      description: "A comprehensive Learning Management System designed to deliver high-quality educational experiences. TKZ-LMS combines AI-powered tracking with interactive modules to create a personalized learning environment for students and instructors alike.",
      features: [
        "Interactive Learning Modules",
        "AI-Driven Progress Tracking",
        "Quizzes & Assessments",
        "User-Friendly Dashboard",
        "Real-Time Analytics",
        "Course Customization"
      ],
      logo: LMSlogo 
    },
    {
      title: "TKZ-AMT (Asset Management Tool)",
      description: "A powerful tool for real-time asset tracking and resource monitoring, TKZ-AMT helps organizations keep track of valuable assets with alerts, automated scheduling, and data-driven insights for maintenance and operations.",
      features: [
        "Real-Time Asset Tracking",
        "Automated Scheduling for Maintenance",
        "AI-Driven Insights",
        "Customizable Alerts",
        "Lifecycle Management",
        "Data Analytics for Optimization"
      ],
      logo: AMTlogo 
    },
    {
      title: "TKZ-CRM (Customer Relationship Management)",
      description: "A dynamic CRM platform tailored to support businesses in managing customer relationships efficiently, improving service, and driving customer engagement through data and insights.",
      features: [
        "Customizable Client Profiles",
        "Sales & Marketing Automation",
        "Data-Driven Insights",
        "Customer Support Integration",
        "KPI Tracking",
        "Custom Reporting Tools"
      ],
      logo: CRMlogo 
    },
    {
      title: "TKZ-BKS (Booking System)",
      description: "An efficient booking system designed for managing appointments and reservations with ease. TKZ-BKS offers a secure and streamlined booking process, suitable for various industries.",
      features: [
        "Effortless Booking Interface",
        "Calendar Integration",
        "Automated Reminders",
        "Role-Based Access",
        "Insightful Analytics",
        "Multiple Payment Options"
      ],
      logo: BKSlogo 
    },
    {
      title: "TKZ-MAPT (Map Tracking Tool)",
      description: "A sophisticated map tracking tool for monitoring assets in real time, offering capabilities for precise location tracking, route optimization, and alerts, ideal for logistics and asset-intensive industries.",
      features: [
        "Real-Time Location Monitoring",
        "Geofencing",
        "Route Optimization",
        "Historical Tracking Data",
        "Customizable Alerts",
        "Analytics Dashboard"
      ],
      logo: MAPTlogo 
    },
  ];
  return (
    <div className="products-page">
      {/* Banner Section */}
      <section className="banner-section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-overlay">
          <h1>Our Products</h1>
        </div>
      </section>

      {/* Introductory Content Section */}
      <div className="intro-content">
        <h1>Your Reliable Technology Partner</h1>
        <p>
          TekzAI Solutions offers a robust lineup of products tailored to meet modern business needs...
        </p>
      </div>

      {/* Product Sections */}
      {productsData.map((product, index) => (
        <section key={index} className="product-page-section">
          <div className="product-page-overlay">
            <div className="product-page-details">
              <ProductCard
                title={product.title}
                description={product.description}
                features={product.features}
                logo={product.logo} // Pass the logo to ProductCard
              />
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Explore Our Advanced Products!</h2>
          <p>Contact us to learn more about how our products can transform your business operations.</p>
          <button className="cta-button" onClick={() => navigate('/contact')}>Contact us</button>
        </div>
      </section>
    </div>
  );
}

export default Products;