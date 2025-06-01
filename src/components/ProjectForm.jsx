import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { collection, addDoc} from 'firebase/firestore'
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEj6upZEOq4LciN778ikZQh-VGztJyQLA",
  authDomain: "myapp-b1806.firebaseapp.com",
  databaseURL: "https://myapp-b1806.firebaseio.com",
  projectId: "myapp-b1806",
  storageBucket: "myapp-b1806.appspot.com",
  messagingSenderId: "717699380029",
  appId: "1:717699380029:web:4398094edc842ff7954b54",
  measurementId: "G-RRJVZDGLBC"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ProjectForm() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: '', // New field for Type of project
    budget: '', // New field for Budget
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
const [notification, setNotification] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    // Push the form data to the Firebase Realtime Database
  const docRef= await addDoc(collection(db,'projects'),formData)
     console.log('Document written with ID: ', docRef.id)
     setFormData({
      name: '',
      email: '',
      message: '',
      projectType: '',
      budget: '',
    });
     setFormSubmitted(true);
    setNotification('Form submitted successfully!');
  } catch (error) {
    console.error('Error adding document: ', error);
    setFormSubmitted(false);
    setNotification('Form submission failed!');
  }
   
  };

  return (
    <div className="contact-form-container">
      {formSubmitted && (
                         <div className="notification">
                            {notification}
                         </div>
                        )}

      <h1>I’m excited to learn about your project.</h1>
      <h1>Ready to get started?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group first">
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
         <div className="form-group first">
            <div className="input-wrapper">
          <label htmlFor="projectType">Type of Project</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="responsive">Responsive Design</option>
            <option value="webApp">Web App</option>
            <option value="mobileApp">Mobile App</option>
          </select>
          </div>
           
        <div className="input-wrapper">
          <label htmlFor="budget">Budget</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select Budget</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          </div>
        
        </div>
       
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        {/* New select fields for Type of project and Budget */}
       
        <div className="form-group fbtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
