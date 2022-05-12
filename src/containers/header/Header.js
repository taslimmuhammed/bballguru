import React, {useContext, useState, useEffect} from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { EthersContext } from '../../Context/EthersContext'


const Header = () => {
  const { buyToken, connectWallet, currentAccount, checkAvailablity, isBought, myBalance, tokenPrice, Polygon } = useContext(EthersContext)

  let wall = currentAccount+""
  let wal1 = wall.slice(0,6)
  let wal2 = wall.slice((wall.length-6), wall.length)
  const navigate = useNavigate()

  
  return (


    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Welcome To Gentritrying</h1>
        <p> A Web3 NFT Book Revolution </p>
        <div className="gpt3__header-content__input">
          <div>Price of a token  : </div>
          <div className='price_tabele'>
            {tokenPrice} Matic
          </div>
        </div>
        {
          isBought?<div>
            
            <button className="button-85" role="button" onClick={()=>{
              navigate('/book')
            }}>Read Book</button>
            
            </div>:<div>
            <button className="button-85" role="button">Buy Token to read the Book</button>
            
            </div>
        }

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <div>
      {
        
      }
          {
            currentAccount ? <div>

              {/* card */}
              <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-72 my-5 eth-card white-glassmorphism ">
                <div className="flex justify-between flex-col w-full h-full">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                      <SiEthereum fontSize={21} color="#fff" />
                    </div>
                    <BsInfoCircle fontSize={17} color="#fff" />
                  </div>
                  <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-light text-sm">
                      {/* {shortenAddress(currentAccount)} */}{wal1}...{wal2}
                    </p>
                    <p className="text-white font-semibold text-lg mt-1">
                      Ethereum
                    </p>
                  </div>

                  <div className='text-white'>
                    <div>Current Balance</div>
                    <div>{myBalance} BTK</div>
                  </div>
                  </div>
                </div>
              </div>
              {/* Card Ends***************************************************/}

              {/* Button */}

              {
                Polygon? <div className='btn_header'>
                <button className="button-64" role="button" onClick={()=>{
                 buyToken()
                }}><span className="text">Buy Tokens</span></button>
           </div> :      <div className="alert alert-danger">
        <span className="icon">
            <i className="fa fa-close"></i>
        </span>
     <div className="text">
            <strong>Please Note</strong>
            <p>please Connect to Polygon Network And reload to countinue .</p>
        </div>
        <button className="close">
            <i className="fa fa-close"></i>
        </button>
    </div>
              }
            </div>
            
            : <div>

              {/* Not Connected */}

              <div className='btn_header'>
                <button className="button-64" role="button" onClick={connectWallet}><span className="text">Connect to BlockChain</span></button>
              </div>
            </div>
          }

        </div>



        {/* <img src={ai} /> */}
      </div>
    </div>
  );
}

export default Header;
