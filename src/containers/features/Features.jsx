import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import roadmap  from '../../assets/roadmap.jpeg'
// gpt3__whatgpt3 section__margin
const Features = () => (
 <div className='features_main' id='roadmap'>
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Why An NFT Book Collection?</h1>
      <p>Most People own Physical and digital Ebooks. Although, only physical books have a resale value. The Ebooks and audiobook technically do NOT belong to us. We only pay a one time access fee to the literature. With the evolution of technology, now books can be stored on the blockchain as an NFT. I am now selling my book Gentritrying on the blockchain as an NFT, along with an exclusive AR book cover and much much more</p>
    </div>
    <div className="gpt3__features-container">
     <div>
       <img src={roadmap} className="feature_img"></img>
     </div>
    </div>
  </div>
  </div>
);

export default Features;


//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.