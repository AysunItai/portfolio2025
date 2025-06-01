import React from 'react';
import { data } from "../data/data.js";
import PortfolioCard from '../components/PortfolioCard.jsx';    

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <h2 style={{ fontWeight: 700, fontSize: "2rem", margin:"30px 0 20px 0", textAlign:"center" }}>Portfolio</h2>
      <div className="projects-container" style={{ maxWidth: 900, margin: 'auto', display: 'grid', gap: '20px' }}>
        {data.map((item, index) => (
          <PortfolioCard
            key={index}
            name={item.name}
            description={item.description}
            live={item.live}
            bcolor={item.bcolor}
          />     
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
