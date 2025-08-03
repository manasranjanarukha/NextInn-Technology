// Service.js
import React from "react";
import service_1 from "../../assets/images/service-1.webp";
import service_2 from "../../assets/images/service-2.webp";
import service_3 from "../../assets/images/service-3.webp";

import "./Service.css";

function Service() {
  const services = [
    {
      id: 1,
      title: "Mobile Development",
      description:
        "We specialize in creating dynamic and user-friendly mobile apps for Android and iOS platforms. Our team utilizes the latest technologies like Flutter to ensure your app is robust and scalable.",

      image: service_1,
      imageAlt: "Mobile Development",
      imageClass: "service-image",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Our web development services encompass the full range of modern front-end and back-end technologies such as React and Node. We craft responsive, high-performance websites tailored to your business needs.",

      image: service_2,
      imageAlt: "Web Development",
      imageClass: "service-image",
    },
    {
      id: 3,
      title: "Custom Solutions",
      description:
        "At NextInn Technology, we provide bespoke IT solutions designed to meet your unique business challenges. Our custom services ensure a perfect fit with your enterprise objectives.",

      image: service_3,
      imageAlt: "Custom Solutions",
      imageClass: "service-image",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-badge">
            <span className="badge-text">SERVICES</span> <br />
            <div className="service__separator" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card`}>
              {/* Animated border gradient */}
              <div className={`service-card-border`} />

              <div className="service-card-content">
                {/* Floating elements */}
                <div className="service-card-floating"></div>

                {/* Image */}
                <div className={`service-image-container service-image-fluid`}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className={service.imageClass}
                  />
                </div>

                {/* Content */}
                <h3 className="service-title">{service.title}</h3>

                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
