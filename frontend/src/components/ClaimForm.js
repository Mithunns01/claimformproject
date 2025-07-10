// Import necessary modules
import React, { useState } from 'react';             // useState hook for form state management
import './ClaimForm.css';                           // Import custom styling
import axios from 'axios';                          // Axios for HTTP requests

// Functional component starts
const ClaimForm = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    jobTitle: '',
    diagnosisType: '',
    diagnosisDate: '',
    story: '',
    consent: false,
    captcha: false,
  });

  // Handles form input change for all fields (text, date, checkbox)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Merged: Handles form submission and resets form on success
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent || !formData.captcha) {
      alert('Please agree to the consent and verify the checkbox.');
      return;
    }

    const payload = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      jobTitle: formData.jobTitle,
      dateOfBirth: formData.dob,
      diagnosisDate: formData.diagnosisDate,
      diagnosisType: formData.diagnosisType,
      story: formData.story,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/form', payload);
      console.log('✅ Submitted:', res.data);
      alert('✅ Form submitted successfully!');

      // Reset the form (auto-refresh effect)
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        dob: '',
        jobTitle: '',
        diagnosisType: '',
        diagnosisDate: '',
        story: '',
        consent: false,
        captcha: false,
      });
    } catch (err) {
      console.error('❌ Submission error:', err);
      alert('❌ Submission failed. Try again.');
    }
  };

  // JSX rendering starts here
  return (
    <div className="main-container">

      {/* Left content section (info + offer) */}
      <div className="info-wrapper">
        <div className="left-info">
          <div className="circle-badge"><span>ONLY 6 SLOTS LEFT</span></div>
          <div className="offer-details">
            <h1>Free<br />Case Review</h1>
            <ul className="offer-list">
              <li><span className="check" />100% Confidential</li>
              <li><span className="check" />No Win, No Fee</li>
              <li><span className="check" />Free Case Evaluation</li>
            </ul>
            <button className="contact-btn">Contact us →</button>
          </div>
        </div>

        {/* Informational highlights */}
        <div className="bottom-highlight">
          <h3>Have you or a loved one been affected by <strong>Mesothelioma?</strong></h3>
          <p>As a woman, you’ve carried the weight of care, love, and resilience. Now it’s time someone stands with you.</p>
          <ul>
            <li>Secondary Asbestos exposure is common</li>
            <li>Misdiagnosis delays are more frequent in women</li>
            <li>Women have won significant legal settlements</li>
          </ul>
        </div>
      </div>

      {/* Right panel: The form */}
      <div className="right-panel frosted-glass">
        <h2>Claim Form</h2>
        <form onSubmit={handleSubmit}>

          {/* First name & Last name */}
          <div className="row">
            <input name="firstName" placeholder="First Name *" value={formData.firstName} required onChange={handleChange} className="underline-input" />
            <input name="lastName" placeholder="Last Name *" value={formData.lastName} required onChange={handleChange} className="underline-input" />
          </div>

          {/* Phone & Email */}
          <div className="row">
            <input name="phone" placeholder="Phone Number *" value={formData.phone} required onChange={handleChange} className="underline-input" />
            <input name="email" placeholder="Email ID *" type="email" value={formData.email} required onChange={handleChange} className="underline-input" />
          </div>

          {/* DOB & Job Title */}
          <div className="row">
            <input name="dob" type="date" value={formData.dob} required onChange={handleChange} className="underline-input" />
            <input name="jobTitle" placeholder="Job Title *" value={formData.jobTitle} required onChange={handleChange} className="underline-input" />
          </div>

          {/* Diagnosis Date & Type */}
          <div className="row">
            <input name="diagnosisDate" type="date" value={formData.diagnosisDate} required onChange={handleChange} className="underline-input" />
            <input name="diagnosisType" placeholder="Type of Diagnosis *" value={formData.diagnosisType} required onChange={handleChange} className="underline-input" />
          </div>

          {/* Story textarea (optional) */}
          <textarea
            name="story"
            placeholder="Tell us your story (optional)"
            rows="4"
            value={formData.story}
            onChange={handleChange}
            className="underline-input"
          />

          {/* Consent Checkbox */}
          <div className="checkbox">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            <label>
              I agree to the <a href="#">privacy policy</a> and <a href="#">disclaimer</a> and give my express written consent to be contacted.
            </label>
          </div>

          {/* Captcha Checkbox */}
          <div className="checkbox">
            <input type="checkbox" name="captcha" checked={formData.captcha} onChange={handleChange} />
            <label>Please check this box to verify you're a person.</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="submit-button">Start your claim now</button>
        </form>
      </div>
    </div>
  );
};

// Export the component for use
export default ClaimForm;
