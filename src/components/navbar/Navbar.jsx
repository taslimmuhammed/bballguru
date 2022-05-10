import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/icon_bb.jpeg';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p onClick={()=>{
            navigate('/')
          }}>Home</p>
          <p><a href="#roadmap">Road Map</a></p>
          <p onClick={()=>{
            navigate('/book')
          }}>Read your Book</p>
          <p onClick={()=>{
            navigate('/admin')
          }}>Admin</p>
          <p><a href="https://hiphopcryptowatch.com/">Dark Crypto</a></p>
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#roadmap">Road Map</a></p>
          <p onClick={()=>{
            navigate('/book')
          }}>Read your Book</p>
          <p onClick={()=>{
            navigate('/admin')
          }}>Admin</p>
          <p><a href="https://hiphopcryptowatch.com/">Dark Crypto</a></p>
          </div>
          {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
