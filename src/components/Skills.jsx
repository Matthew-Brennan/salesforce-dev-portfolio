import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Skills({ skills }) {
    const { darkMode } = useTheme();
  return (
    <section className="slds-p-around_xx-large" style={{ backgroundColor: darkMode ? '#1c2b39' : '#fff' }}>
      <div className="slds-container_medium">
        <h2 className="slds-text-heading_large slds-m-bottom_medium slds-border_bottom">
          Technical Skills
        </h2>
        
        <div className="slds-grid slds-wrap slds-gutters">
          {skills.map((skill, index) => (
            <div key={index} className="slds-col slds-size_1-of-3 slds-m-bottom_medium">
              <div className="slds-card slds-card_boundary">
                <div className="slds-card__body slds-text-align_center">
                  <div className="slds-media slds-media_center">
                    {/* Use actual Salesforce icons or custom images */}
                    <div className="slds-media__figure">
                      <span className="slds-icon_container slds-icon-standard-skill">
                        <svg className="slds-icon slds-icon_small">
                          <use xlinkHref={`/icons.svg#${skill.iconId}`}></use>
                        </svg>
                      </span>
                    </div>
                    <div className="slds-media__body">
                      <h3 className="slds-text-heading_small slds-m-bottom_xx-small">
                        {skill.name}
                      </h3>
                      <div className="slds-progress-bar">
                        <div 
                          className="slds-progress-bar__value" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                      <p className="slds-text-color_weak slds-m-top_xx-small">
                        {skill.yearsExperience}+ years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}