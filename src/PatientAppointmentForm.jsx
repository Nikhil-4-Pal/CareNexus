
import React, { useState } from 'react';
import   '/home/nikhil-pal/CareNexus/CareNexus/src/PatientAppointmentForm.css'

function PatientForm() {
  const [formData, setFormData] = useState({
    hospital: '',
    department: '',
    date: '',
    patientName: '',
    sex: '',
    ageYears: '',
    ageMonths: '',
    ageDays: '',
    s_o: '',
    address: '',
    idType: '',
    idNumber: '',
    mobileNo: '',
    complaints: '',
    medicalHistory: '',
    medicalHistoryFile: null,
    hasMedicalHistory: 'No',
  });

  const handleChang = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };
  

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Submitted:', formData);
  };

  const handleMedicalHistoryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      hasMedicalHistory: value,
      medicalHistory: '', 
      medicalHistoryFile: null,
    }));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Patient Appointment Form</h1>
      <form onSubmit={handleSubmit}>
        
        <h4 className="mt-4">1. Hospital and Department</h4>
        <div className="mb-3">
          <label htmlFor="hospital" className="form-label">Select Hospital: <span className="required">*</span></label>
          <select className="form-select" id="hospital" value={formData.hospital} onChange={handleChange} required>
            <option value="" disabled>--select--</option>
            <option value="Hospital A">Hospital A</option>
            <option value="Hospital B">Hospital B</option>
            <option value="Hospital C">Hospital C</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">Select Department: <span className="required">*</span></label>
          <select className="form-select" id="department" value={formData.department} onChange={handleChange} required>
            <option value="" disabled>--select--</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Neurology">Neurology</option>
            <option value="General Medicine">General Medicine</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date: <span className="required">*</span></label>
          <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange} required />
        </div>
      
        <div className="mb-3">
  <label htmlFor="timeSlot" className="form-label">Preferred Time Slot: <span className="required">*</span></label>
  <select 
    className="form-select" 
    id="timeSlot" 
    value={formData.timeSlot} 
    onChange={handleChange} 
    required
  >
    <option value="" >--Select Time Slot--</option>
    <option value="9am - 12pm">9am - 12pm</option>
    <option value="12pm - 2pm">12pm - 2pm</option>
    <option value="2pm - 5pm">2pm - 5pm</option>
  </select>
</div>

      
        <h4 className="mt-4">2. Patient Details:</h4>
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">Patient Name: <span className="required">*</span></label>
          <input type="text" placeholder='Enter your name' className="form-control" id="patientName" value={formData.patientName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
  <label htmlFor="sex" className="form-label">Sex: <span className="required">*</span></label>
  <div className="form-check form-check-inline">
    <input 
      type="radio" 
      id="male" 
      name="sex" 
      value="Male" 
      checked={formData.sex === 'Male'} 
      onChange={handleChang} 
      required 
    />
    <label htmlFor="male" className="form-check-label">Male</label>
  </div>
  <div className="form-check form-check-inline">
    <input 
      type="radio" 
      id="female" 
      name="sex" 
      value="Female" 
      checked={formData.sex === 'Female'} 
      onChange={handleChang} 
      required 
    />
    <label htmlFor="female" className="form-check-label">Female</label>
  </div>
  <div className="form-check form-check-inline">
    <input 
      type="radio" 
      id="others" 
      name="sex" 
      value="Others" 
      checked={formData.sex === 'Others'} 
      onChange={handleChang} 
      required 
    />
    <label htmlFor="others" className="form-check-label">Others</label>
  </div>
</div>



<div className="mb-3">
  <label htmlFor="ageYears" className="form-label">Age: <span className="required">*</span></label>
  <div className="d-flex">
    <input 
      type="number" 
      className="form-control me-2" 
      id="ageYears" 
      placeholder="Years" 
      value={formData.ageYears} 
      onChange={handleChange} 
      required 
      style={{ width: '100px' }} 
    />
    <input 
      type="number" 
      className="form-control me-2" 
      id="ageMonths" 
      placeholder="Months" 
      value={formData.ageMonths} 
      onChange={handleChange} 
      style={{ width: '100px' }} 
    />
   
  </div>
</div>



        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address: <span className="required">*</span></label>
          <input type="text" placeholder='Enter your correspondence address' className="form-control" id="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="idType" className="form-label">Select ID Type</label>
          <select className="form-select" id="idType" value={formData.idType} onChange={handleChange}>
            <option value="" disabled>--Select--</option>
            <option value="Aadhaar">Aadhaar</option>
            <option value="Passport">Passport</option>
            <option value="Driving License">Driving License</option>
            <option value="Voter ID">Voter ID</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="idNumber" className="form-label">Enter ID Number</label>
          <input type="text" className="form-control" id="idNumber" value={formData.idNumber} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="mobileNo" className="form-label">Mobile No.: <span className="required">*</span></label>
          <input type="tel" placeholder='Enter your 10-digit mobile number' className="form-control" id="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
        </div>

        <h4 className="mt-4">3. Medical Details</h4>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason for Appointment</label>
          <textarea className="form-control" id="reason" placeholder='Explain Your Symptoms' rows="3" value={formData.reason} onChange={handleChange} required></textarea>
        </div>

        <div className="mb-3">
        <label className="form-label">Do you have a medical history? <span className="required">*</span></label>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="medicalHistoryYes"
            name="hasMedicalHistory"
            value="Yes"
            checked={formData.hasMedicalHistory === 'Yes'}
            onChange={handleMedicalHistoryChange}
            required
          />
          <label htmlFor="medicalHistoryYes" className="form-check-label">Yes</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="medicalHistoryNo"
            name="hasMedicalHistory"
            value="No"
            checked={formData.hasMedicalHistory === 'No'}
            onChange={handleMedicalHistoryChange}
            required
          />
          <label htmlFor="medicalHistoryNo" className="form-check-label">No</label>
        </div>
      </div>

     
      {formData.hasMedicalHistory === 'Yes' && (
        <>
          <div className="mb-3">
            <label htmlFor="medicalHistory" className="form-label">Medical History (Optional)</label>
            <textarea
              className="form-control"
              id="medicalHistory"
              rows="3"
              value={formData.medicalHistory}
              onChange={handleChange}
              placeholder="Provide details of your medical history"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="medicalHistoryFile" className="form-label">Upload Document or Image (Optional)</label>
            <input
              type="file"
              className="form-control"
              id="medicalHistoryFile"
              onChange={handleChange}
            />
          </div>
        </>
      )}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PatientForm;