import React from 'react';
import Book_Cover from '../../assets/Book_Cover.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={Book_Cover} alt="possibility"  className='gpt3__possibility_img' />
    </div>
    <div className="gpt3__possibility-content">
      <h4> </h4>
      <h1 className="gradient__text">Why An NFT Book Collection?</h1>
      <p>New non-fungible token (NFT) collections pop up every other day, offering collectors an opportunity to become the first buyer of an NFT – a process known as “minting.”
When it comes to navigating NFTs, minting as a term may seem confusing because it refers both to a collection becoming part of the blockchain and to a collector buying an item from that collection for the first time. We will focus on minting in the latter sense.
One of the main benefits of minting NFTs is investors are able to buy into a collection at the earliest possible opportunity. That means they stand the best chance of making a profit. As far as writing goes; NFTs are a way for experimental writers to experiment with form especially writers whose interests lie in technology. The Gentritrying NFT collection, will revolutionize the way Authors can make their voices heard through literature and now technology.  </p>
      <h4>ABOUT AUTHOR: A marketing manager with 3+ years of community management and experience for multiple startups in the cryptocurrency sector. Gabriel has been founder of numerous web3 and non profit start ups. He Has been minting, researching, and earning certifications in the cryptocurrency, NFT, blockchain, AR space for the last 10 years. He is an active member in over 5k Discord channels and helps build communities within NFT spaces (has been active on Discord since the launch of the platform). Gabriel is an avid crypto, blockchain, web3, and DAO enthusiast who has minted NFTs on 5 different platforms using Artificial Intelligence art. He has an extensive experience building and nurturing online communities organically. He has also in the past worked in the inner city building communities as well. Most notably a teacher, basketball coach and mentor in NYC. Gabriel is also the Author of “Gentritrying”, a NFT book that focuses on gentrification in minority neighborhoods all across America. </h4>
    </div>
  </div>
);

export default Possibility;
