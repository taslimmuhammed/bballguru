import React, { useState, useContext, useEffect } from 'react'
import './Admin.css'
import {EthersContext} from '../../Context/EthersContext'
function AdminPanel() {
    const [mintNo, setmintNo] = useState(0)
    const [Price, setPrice] = useState(0)
    const [Address, setAddress] = useState()
    const {mint,  transferOwnership, changePrice,myBalance,Supply} = useContext(EthersContext)
    return (
        <div className='admin_main'>
            {/* Heading */}
            <div className='admin_heading'><h1>Admin Panel</h1></div>

            {/* Contents */}
            <div>
                <div className='ct_head'> Token details</div>
                <div className='ct'>
                    <div className='ct-1'>Name  of Token: </div>
                    <div className='ct-2'>BTK</div>
                </div>
                <div className='ct'>
                    <div className='ct-1'>Total No. of Tokens Roaming: </div>
                    <div className='ct-2'>{Supply}</div>
                </div>
                <div className='ct'>
                    <div className='ct-1'>Your Balance : </div>
                    <div className='ct-2'>{myBalance}</div>
                </div>
            </div>

            {/* Controls */}
            <div>


                <div className='ct_head'>Controls</div>
                <div className='cn'>
                    <div className='cn_1'>Mint Coins</div>
                    <div className="webflow-style-input">
                        <input className="" type="number" placeholder="0" onChange={(e)=>setmintNo(e.target.value)}></input>
                    </div>
                </div>

                <div className='cn_3'>
                    <button className="button-29" role="button"  onClick={()=>{mint(mintNo)}}>Mint Tokens</button>
                </div>

                <div className='cn'>
                    <div className='cn_1'>Change selling price</div>
                    <div className="webflow-style-input">
                        <input className="" type="number" placeholder="0" onChange={(e)=>setPrice(e.target.value)}></input>
                    </div>
                </div>

                <div className='cn_3'>
                    <button className="button-29" onClick={()=>{changePrice(Price)}}>Change</button>
                </div>

                <div className='cn'>
                    <div className='cn_1'>Transfer OwnerShip</div>
                    <div className="webflow-style-input">
                        <input className="" type="text" placeholder="" onChange={(e)=>setAddress(e.target.value)}></input>
                    </div>
                </div>

                <div className='cn_3'>
                    <button className="button-29" role="button" onClick={()=>{transferOwnership(Address)}}>Change</button>
                </div>



            </div>
        </div>
    )
}

export default AdminPanel