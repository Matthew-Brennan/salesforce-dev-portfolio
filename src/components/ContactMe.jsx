import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="slds-p-around_xx-large">
      <h2 className="slds-text-heading_large slds-m-bottom_medium">Contact Me</h2>
      <form onSubmit={handleSubmit} className="slds-form slds-form_stacked">
        <div className="slds-form-element">
          <label className="slds-form-element__label">Name</label>
          <input
            type="text"
            className="slds-input"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="slds-button slds-button_brand slds-m-top_medium"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}