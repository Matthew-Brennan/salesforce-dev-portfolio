import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Projects({ projects }) {
    const { darkMode } = useTheme();
    return (
        <section 
          className="slds-p-around_xx-large" 
          style={{ 
            backgroundColor: darkMode ? 'var(--bg-colour)' : 'inherit',
            color: darkMode ? 'var(--text-colour)' : 'inherit'
          }}
        >
    <div className="slds-container_medium">
      <h2 className="slds-text-heading_large slds-m-bottom_medium">Projects</h2>
      <div className="slds-grid slds-wrap">
        {projects.map((project, index) => (
          <div key={index} className="slds-col slds-size_1-of-2 slds-p-around_medium">
            <div className="slds-card">
              <div className="slds-card__body slds-p-around_medium">
                <h3 className="slds-text-heading_medium">{project.title}</h3>
                <p className="slds-m-top_small">{project.description}</p>
                <div className="slds-m-top_small">
                  <span className="slds-badge">{project.result}</span>
                </div>
                <ul className="slds-list_horizontal slds-m-top_small">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="slds-item_label">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}