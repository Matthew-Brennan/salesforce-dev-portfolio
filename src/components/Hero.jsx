// components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="slds-p-around_xx-large slds-theme_default slds-border_bottom">
      <div className="slds-container_large">
        <div className="slds-grid slds-wrap slds-gutters">
          {/* Left Column - Image */}
          <div className="slds-col slds-size_1-of-2 slds-medium-size_1-of-3">
            <div className="slds-media__figure">
              <img 
                src="/profile.jpg" 
                alt="Salesforce Developer Profile"
                className="slds-image slds-image_circular"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="slds-col slds-size_1-of-2 slds-medium-size_2-of-3">
            <div className="slds-text-heading_small slds-text-color_weak">
              Salesforce Platform Developer
            </div>
            <h1 className="slds-text-heading_large slds-m-top_small">
              Building Scalable Solutions on 
              <span className="slds-text-color_brand"> Salesforce</span>
            </h1>
            
            <p className="slds-text-body_regular slds-m-top_medium">
              Certified Salesforce Developer with 5+ years of experience creating
              custom applications, automating complex workflows, and integrating
              enterprise systems.
            </p>

            {/* CTAs */}
            <div className="slds-m-top_large">
              <Link 
                to="/projects" 
                className="slds-button slds-button_brand slds-m-right_small"
              >
                View Projects
              </Link>
              <Link 
                to="/contact" 
                className="slds-button slds-button_outline-brand"
              >
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div className="slds-grid slds-wrap slds-m-top_x-large">
              <div className="slds-col slds-size_1-of-3">
                <div className="slds-text-heading_large slds-text-color_brand">12+</div>
                <div className="slds-text-title">Projects Delivered</div>
              </div>
              <div className="slds-col slds-size_1-of-3">
                <div className="slds-text-heading_large slds-text-color_brand">3</div>
                <div className="slds-text-title">Certifications</div>
              </div>
              <div className="slds-col slds-size_1-of_3">
                <div className="slds-text-heading_large slds-text-color_brand">100%</div>
                <div className="slds-text-title">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}