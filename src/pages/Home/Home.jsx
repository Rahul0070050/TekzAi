import React from "react";
import { useNavigate } from "react-router-dom";
import bannerBackground from "../../assets/home-banner.webp";
import iconLMS from "../../assets/p-1.png";
import iconAMT from "../../assets/p-2.png";
import iconCRM from "../../assets/p-3.png";
import iconBKS from "../../assets/p-5.png";
import homeBackground from "../../assets/home-background-image1.jpeg";
import video from "../../assets/bannervideo.mp4";

import "./Home.css";
import {
  FaNetworkWired,
  FaCloud,
  FaTools,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import ClientShowcase from "../Clients/Clients.component";

function Home() {
  const navigate = useNavigate();

  // Updated services with titles, icons, and descriptions
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      description:
        "We create bespoke software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems.",
    },
    {
      icon: <FaChartLine />,
      title: "AI and Machine Learning",
      description:
        "Harness the power of AI with our advanced analytics and automation solutions.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud-based solutions for businesses of all sizes. Our services include cloud migration, infrastructure setup, and ongoing management.",
    },
    {
      icon: <FaCogs />,
      title: "ERP Systems",
      description:
        "Streamline your operations with our comprehensive ERP solutions. We offer modules for finance, HR, supply chain, and more, tailored to your industry.",
    },
    // {
    //   icon: <FaDatabase />,
    //   title: "Data Analytics and Business Intelligence",
    //   description: "Unlock the full potential of your data with our analytics and BI solutions. We provide data visualization, reporting, and insights to help you make informed business decisions."
    // },
    // {
    //   icon: <FaShieldAlt />,
    //   title: "Cybersecurity Solutions",
    //   description: "Protect your business with our comprehensive cybersecurity services. We offer risk assessments, security audits, threat detection, and more to ensure your digital assets are secure."
    // },
  ];

  const products = [
    {
      icon: iconLMS,
      name: "TKZ-LMS",
      description:
        "Designed for seamless learning management, enhancing educational experiences with AI-enabled tracking and assessments.",
      keyPoints: [
        "User-friendly interface for students and educators",
        "Real-time tracking of learning progress",
        "Interactive quizzes and assessments",
      ],
    },
    {
      icon: iconAMT,
      name: "TKZ-AMT (Asset Management Tool)",
      description:
        "Comprehensive asset tracking tool, enabling efficient resource monitoring with real-time updates and alerts.",
      keyPoints: [
        "Real-time asset location tracking",
        "Automated inspection scheduling",
        "Visual inspection support with AI-guided insights",
      ],
    },
    {
      icon: iconCRM,
      name: "TKZ-CRM (Customer Relationship Management)",
      description:
        "A robust CRM system offering tailored solutions to improve customer service and foster growth.",
      keyPoints: [
        "Customizable client profiles",
        "Sales and marketing automation",
        "Customer insights through data analytics",
      ],
    },
    {
      icon: iconBKS,
      name: "TKZ-BKS (Booking System)",
      description:
        "Easy-to-use booking platform for managing reservations with secure, flexible scheduling options.",
      keyPoints: [
        "Quick and secure reservation process",
        "Multi-user access with role management",
        "Real-time calendar view",
      ],
    },
    // {
    //   icon: "/path/to/icon1.png",
    //   name: "TKZ-MAPT (Map Tracking Tool)",
    //   description: "Advanced map tracking capabilities for accurate asset location and real-time monitoring.",
    //   keyPoints: [
    //     "Real-time location monitoring",
    //     "Geofencing and asset alerts"
    //   ],
    // },
  ];

  return (
    <>
      <section className="hero-section">
        <video
          className="hero-video"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="hero-content">
          <h1>TEKZAI: Where Innovation Meets Technology.</h1>
          <p>Empowering businesses with cutting-edge technology solutions.</p>
          <div className="cta-buttons">
            <button className="cta-button" onClick={() => navigate("/about")}>
              Learn More
            </button>
            <button
              className="cta-button secondary"
              onClick={() => navigate("/services")}
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="company-section">
        <div className="company-content">
          <div className="company-text">
            <h2>Your Trusted Technology Solutions Partner</h2>
            <p>
              At TEKZAI, we believe in the transformative power of technology to
              drive growth and innovation. With a commitment to delivering
              high-impact solutions, we help businesses streamline operations,
              enhance efficiency, and achieve sustainable success through
              advanced technological strategies.
            </p>
            <p>
              Our team’s expertise spans diverse industries, allowing us to
              deliver solutions that are not only innovative but also tailored
              to meet the distinct needs of each client. Transparency,
              adaptability, and prompt execution are at the core of our
              approach, ensuring that every partnership is built on trust and
              exceptional service.
            </p>
            <p>
              TekzAi is more than a technology provider; we are your strategic
              partner, committed to helping you navigate complex digital
              landscapes and achieve measurable results. Experience the TekzAi
              difference— where innovation meets precision and dedication drives
              excellence.
            </p>
            <button
              className="read-more-button"
              onClick={() => navigate("/about")}
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="services-section"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <h2 className="services-title">Services</h2>
        <p className="services-description">
          We take pride in simplifying IT environments and delivering
          cost-effective solutions to our clients.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="services-buttons">
          <button
            className="services-button primary"
            onClick={() => navigate("/services")}
          >
            Browse Services
          </button>
          <button
            className="services-button secondary"
            onClick={() => navigate("/contact")}
          >
            Get a Quote
          </button>
        </div>
      </section>

      <section className="products-home-section">
        <h2 className="products-home-title">Our Products</h2>
        <p className="products-home-description">
          Our technology-driven solutions simplify daily tasks, improve
          productivity, minimize errors, and reduce costs.
        </p>
        <div className="products-home-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-home-card"
              style={{ backgroundImage: `url(${homeBackground})` }}
            >
              <div className="product-home-icon">
                <img
                  src={product.icon}
                  alt={`${product.name} icon`}
                  style={{ width: "170px", height: "130px" }}
                />
              </div>
              <h3 className="product-home-name">{product.name}</h3>
              <p className="product-home-description">{product.description}</p>
              <ul className="product-home-keypoints">
                {product.keyPoints.map((point, idx) => (
                  <li key={idx} className="product-home-keypoint">
                    ✔ {point}
                  </li>
                ))}
              </ul>
              <div className="product-home-buttons">
                <button
                  className="product-home-button"
                  onClick={() => navigate("/products")}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClientShowcase />
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Simplify your IT environment!</h2>
          <p>
            Schedule a free consultation to learn more about how we can ease
            your tasks.
          </p>
          <button className="cta-button" onClick={() => navigate("/contact")}>
            Contact us
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
