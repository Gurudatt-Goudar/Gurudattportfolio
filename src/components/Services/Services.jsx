import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data'; // Import data from external file
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedService(expandedService === index ? null : index); // Toggle between expanded and collapsed
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="service-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>
              {expandedService === index
                ? service.s_desc
                : `${service.s_desc.substring(0, 50)}...`} {/* Show only part of the description initially */}
            </p>
            <div className="services-readmore" onClick={() => handleReadMoreClick(index)}>
              <p>{expandedService === index ? "Read Less" : "Read More"}</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
