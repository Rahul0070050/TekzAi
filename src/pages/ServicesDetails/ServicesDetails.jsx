import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Services.css";
import bannerImage from "../../assets/services-banner-image.webp";
import arrow from "../../assets/svg/arrow.svg";
import AIML01Img from "../../assets/features/AI-ML01.png";
import CybersecuritySolutions01Img from "../../assets/features/Cybersecurity-Solutions01.png";
import DataAnalytics01Img from "../../assets/features/Data-Analytics01.png";
import ERPSystems01Img from "../../assets/features/ERP-Systems01.png";
import CloudSolutions01Img from "../../assets/features/Cloud-Solutions01.png";
import SoftwareDevelopment01Img from "../../assets/features/Software-Development01.png";

import AIML02Img from "../../assets/features/AI-ML02.png";
import CybersecuritySolutions02Img from "../../assets/features/Cybersecurity-Solutions02.png";
import DataAnalytics02Img from "../../assets/features/Data-Analytics02.png";
import ERPSystems02Img from "../../assets/features/ERP-Systems02.png";
import CloudSolutions02Img from "../../assets/features/Cloud-Solutions02.png";
import SoftwareDevelopment02Img from "../../assets/features/Software-Development02.png";
import { FaCheck } from "react-icons/fa";
import FeatureShowcase from "./FeatureShowcase/FeatureShowcase.componet";

const servicesData = [
  {
    title: "Custom Software Development",
    subheading: "Tailored Digital Solutions for Unique Business Needs",
    img1: SoftwareDevelopment01Img,
    img2: SoftwareDevelopment02Img,
    description: [
      "We specialize in building tailored software applications that align perfectly with your unique business needs. Whether you're looking to digitize your operations, build a new customer-facing platform, or create internal tools for better team productivity, we turn your ideas into intuitive and scalable solutions.",
      "Our experienced team handles everything—from requirement analysis and UI/UX design to development, testing, and deployment. We ensure that each solution is robust, secure, and adaptable to future growth. Whether it’s a mobile app for Android/iOS, a web portal, or a full-fledged enterprise solution, we deliver performance-driven products with a focus on quality and user experience.",
      "We also provide ongoing support and maintenance to ensure your systems stay updated and aligned with evolving market demands. With agile development and open communication, we keep you in control at every stage of the project.",
    ],
    points: [
      "Web and mobile applications",
      "Enterprise-level solutions",
      "Fully customized features",
      "Scalable and flexible",
      "End-to-end support",
    ],
    highlights: [
      "Web Apps",
      "Mobile Apps",
      "Custom Logic",
      "UI/UX",
      "Full Lifecycle",
    ],
  },
  {
    title: "AI and Machine Learning",
    img1: AIML01Img,
    img2: AIML02Img,
    subheading: "Smart Automation & Predictive Intelligence for the Future",
    description: [
      "Our AI and Machine Learning services help businesses turn raw data into strategic intelligence. By leveraging advanced algorithms and deep learning models, we enable smarter decision-making, automation of repetitive tasks, and accurate predictions that enhance your operational efficiency.",
      "From chatbots and recommendation engines to fraud detection and predictive maintenance, we develop custom AI solutions tailored to your industry challenges. Our models are trained on your business data, ensuring relevance, accuracy, and measurable results.",
      "Whether you're integrating AI for the first time or scaling existing models, we provide end-to-end support—from data preparation and model training to deployment and continuous monitoring. The goal is to embed intelligence into your workflows without disrupting your existing systems.",
    ],
    points: [
      "Advanced data analytics",
      "Predictive modeling",
      "Process automation",
      "Custom AI integration",
      "Industry-specific AI solutions",
    ],
    highlights: [
      "Chatbots",
      "NLP",
      "ML Models",
      "AI Pipelines",
      "Smart Systems",
    ],
  },
  {
    title: "Cloud Solutions",
    img1: CloudSolutions01Img,
    img2: CloudSolutions02Img,
    subheading: "Secure, Scalable Cloud Infrastructure for Modern Businesses",
    description: [
      "We offer complete cloud transformation services that help you move from on-premises infrastructure to a modern, agile cloud environment. Whether you're migrating legacy systems or starting fresh in the cloud, our experts ensure a smooth transition with minimal disruption.",
      "Our services include infrastructure setup, cloud-native application development, automated backups, and disaster recovery planning. We work with leading cloud providers (like AWS, Azure, and GCP) to deliver highly available, secure, and scalable environments.",
      "Beyond deployment, we provide ongoing cloud management, performance optimization, and cost monitoring to ensure long-term success. Our goal is to help you achieve flexibility, reduce IT overhead, and ensure your team can collaborate seamlessly from anywhere in the world.",
    ],
    points: [
      "Cloud migration and setup",
      "Infrastructure management",
      "Backup and recovery",
      "Scalable growth support",
      "Ongoing cloud maintenance",
    ],
    highlights: ["AWS", "Azure", "GCP", "Cloud DevOps", "Disaster Recovery"],
  },
  {
    title: "ERP Systems",
    img1: ERPSystems01Img,
    img2: ERPSystems02Img,
    subheading: "Integrated ERP Platforms for Streamlined Business Operations",
    description: [
      "We design and deploy powerful ERP systems that unify all core aspects of your business into a single platform. From accounting and human resources to procurement and inventory management, our ERP solutions streamline operations and eliminate data silos.",
      "Each ERP implementation is tailored to your industry’s specific workflows, ensuring relevance and maximum efficiency. With integrated modules and real-time data access, businesses can monitor performance, forecast demand, and make informed decisions faster than ever before.",
      "Whether you are a small enterprise looking for basic modules or a large organization in need of full-scale integration, our scalable ERP architecture grows with your business and ensures operational excellence at every stage.",
    ],
    points: [
      "Financial and HR modules",
      "Supply chain integration",
      "Real-time data access",
      "Industry-specific customization",
      "Enhanced productivity",
    ],
    highlights: ["Inventory", "Finance", "HRMS", "Procurement", "ERP Modules"],
  },
  {
    title: "Data Analytics and Business Intelligence",
    subheading: "Turn Data into Decisions with Actionable Insights",
    img1: DataAnalytics01Img,
    img2: DataAnalytics02Img,
    description: [
      "In the digital era, data is your most valuable asset—if used correctly. Our analytics and BI services help you convert data into meaningful insights through interactive dashboards, real-time metrics, and detailed reporting tools.",
      "We integrate data from multiple sources, clean and structure it, and present it visually so that key stakeholders can understand trends, identify risks, and act strategically. Whether you're tracking sales performance, monitoring operational KPIs, or forecasting growth, we make it easy to draw insights at a glance.",
      "Our custom solutions are built to scale with your organization and can be embedded within your existing systems or operated as standalone dashboards. With our help, you’ll be able to shift from reactive to proactive decision-making.",
    ],
    points: [
      "Data visualization tools",
      "Customizable reports",
      "Real-time dashboards",
      "KPI tracking",
      "Strategic decision support",
    ],
    highlights: ["Dashboards", "KPI", "ETL", "BI Tools", "SQL Analytics"],
  },
  {
    title: "Cybersecurity Solutions",
    subheading: "Robust Protection for Your Digital Ecosystem",
    img1: CybersecuritySolutions01Img,
    img2: CybersecuritySolutions02Img,
    description: [
      "In an age of increasing digital threats, securing your systems and data is non-negotiable. Our cybersecurity services are designed to safeguard your business from evolving cyber risks while ensuring regulatory compliance and customer trust.",
      "We start with a comprehensive risk assessment and security audit to identify vulnerabilities across your network, applications, and infrastructure. Based on findings, we deploy the necessary controls—from firewalls and intrusion detection to data encryption and endpoint protection.",
      "Our team offers 24/7 threat monitoring, incident response planning, and regular penetration testing to maintain a strong security posture. With our layered defense approach, we ensure that your digital environment is resilient, compliant, and protected from both external and internal threats.",
    ],
    points: [
      "Security audits and assessments",
      "Threat detection and response",
      "Compliance support",
      "Data encryption protocols",
      "Continuous monitoring",
    ],
    highlights: ["Firewall", "Pen Testing", "Encryption", "SOC", "Compliance"],
  },
];

function ServicesDetails() {
  const navigate = useNavigate();
  const {
    state: { title },
  } = useLocation();

  const [service, setService] = useState();

  useEffect(() => {
    console.log("title ", title);

    setService(servicesData.find((item) => item.title == title));
  }, [title]);

  return (
    <div className="services-detail-page">
      {/* Banner Section */}
      <section
        className="service-detail-banner-section"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-overlay-text">
          <h1>{service?.title}</h1>
        </div>
      </section>

      {/* Introductory Content Section */}
      <div className="intro-content">
        <h1>{service?.subheading}</h1>
        {service?.description?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="heading">
        <h1>What We Offer</h1>
      </div>
      <FeatureShowcase feature={service} />
      <div className="feature-detail">
        <button
          onClick={() => navigate("/contact")}
          className="services-button"
        >
          Know More
          <span className="arrow-icon">
            <img src={arrow} alt="" />
          </span>
        </button>
      </div>
      {/* Service Sections */}

      {/* CTA Section */}
      {/* <section className="cta-section">
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
      </section> */}
    </div>
  );
}

export default ServicesDetails;
