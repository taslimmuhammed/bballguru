import React, {useContext} from 'react'
import { Brand, CTA, Navbar } from '../components'
import Loader from '../components/Loader/Loader'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from '../containers'
import {EthersContext} from '../Context/EthersContext'
function HomePage() {
  const {isLoading} = useContext(EthersContext)
  return (
    isLoading?<Loader/>:
    <div className="App">
    <div className="gradient__bg">
    <Navbar />
    <Header />
    </div>
    <Features />
    <Possibility />
    <Footer />
    </div>
  )
}

export default HomePage