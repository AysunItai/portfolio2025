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

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

  const handleSubmit =async (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    try{
    // Push the form data to the Firebase Realtime Database
  const docRef= await addDoc(collection(db,'mentoring'),formData)
     console.log('Document written with ID: ', docRef.id)
     setFormData({
      name: '',
      email: '',
      message: '',
      
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
      <h1>Thanks for taking the time to reach out.</h1>
      <h1> How can I help you today?</h1>
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
        <div className="form-group fbtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
