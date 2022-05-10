import React from 'react';
import Book_Cover from '../../assets/Book_Cover.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={Book_Cover} alt="possibility"  className='gpt3__possibility_img' />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Lorem ipsum began as scrambled, nonsensical </h4>
      <h1 className="gradient__text">Lorem ipsum dolor sit <br /> elit, sed do eiusmod tempor</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <h4>ipsum dolor sit amet, consectetur adipiscing el</h4>
    </div>
  </div>
);

export default Possibility;
