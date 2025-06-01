import React, { useRef } from 'react';
import logo from '../assets/logo.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const hiddenInputRef = useRef(null);

  const handleGithubClick = (event) => {
    event.preventDefault();
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = 'e2f868897dcc'; // Set the password value
    }
    document.getElementById('hiddenForm').submit();
  };

  return (
    <div className="footer-container">
      <div className="logo-container">
        <img className="footer-logo" src={logo} alt="logo" />
      </div>
      
      <div>
        <ul className="footer-social">
          <li className='social-link'>
            <a href='https://www.linkedin.com/in/aysun-itai-31390b202/'>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='social-link'>
         
            <a href='https://github.com/AysunItai'>
            <FaGithub size={30} />
            </a>
              
         
          </li>
          <li className='social-link'>
            <a href='mailto:aysun.itai@gmail.com'>
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
     
      <h4 className='footer-heading'>Copyright@2025ItaiWebSolutions</h4>
    </div>
  );
};

export default Footer;
