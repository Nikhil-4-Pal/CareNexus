import React, { useState } from 'react';
import './OrganizationForm.css'; // Updated CSS for new layout

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    registrationNumber: '',
    typeOfOrganization: '',
    yearEstablished: '',
    organizationSize: '',
    contactNumber: '',
    emailAddress: '',
    website: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
    primaryContact: {
      fullName: '',
      designation: '',
      contactNumber: '',
      emailAddress: '',
    },
    servicesProvided: [],
    isAccredited: false,
    accreditationDetails: '',
    insuranceProviders: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
    taxIdentificationNumber: '',
    paymentMethod: '',
    consentAgreement: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>

      <h2>Organization Details</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Organization Name:</label>
          <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Registration Number:</label>
          <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Type of Organization:</label>
          <select name="typeOfOrganization" value={formData.typeOfOrganization} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Hospital">Hospital</option>
            <option value="Clinic">Clinic</option>
            <option value="Nursing Home">Nursing Home</option>
            <option value="Medical Laboratory">Medical Laboratory</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Year Established:</label>
          <input type="number" name="yearEstablished" value={formData.yearEstablished} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Organization Size (Number of Employees):</label>
          <input type="number" name="organizationSize" value={formData.organizationSize} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email Address:</label>
          <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Website (if any):</label>
          <input type="url" name="website" value={formData.website} onChange={handleChange} />
        </div>
      </div>

      <h2>Primary Contact Person</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="primaryContact.fullName" value={formData.primaryContact.fullName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <input type="text" name="primaryContact.designation" value={formData.primaryContact.designation} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="tel" name="primaryContact.contactNumber" value={formData.primaryContact.contactNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input type="email" name="primaryContact.emailAddress" value={formData.primaryContact.emailAddress} onChange={handleChange} />
        </div>
      </div>

      <h2>Services Provided</h2>
      <div className="form-row">
        <div className="form-group">
          <label>
            <input type="checkbox" name="servicesProvided" value="General Medical Services" onChange={handleChange} />
            General Medical Services
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="servicesProvided" value="Emergency Services" onChange={handleChange} />
            Emergency Services
          </label>
        </div>
      </div>

      <h2>Billing Information</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Tax Identification Number (TIN):</label>
          <input type="text" name="taxIdentificationNumber" value={formData.taxIdentificationNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Preferred Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <h2>Consent and Agreement</h2>
      <div className="form-group">
        <label className="checkbox-label">
          <input type="checkbox" name="consentAgreement" onChange={handleChange} />
          I certify that the information provided is true and accurate to the best of my knowledge.
        </label>
      </div>
         
      <div className="form-row">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
};

export default OrganizationForm;
