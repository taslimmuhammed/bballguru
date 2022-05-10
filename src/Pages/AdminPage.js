import React, {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import AdminPanel from '../containers/AdminPanel/AdminPanel'
import { EthersContext } from '../Context/EthersContext'

function AdminPage() {
   const {checkOwner, } = useContext(EthersContext)
   const navigate  = useNavigate()
   const checker = async()=>{
       const tx = await checkOwner()
       console.log(tx)
       if(tx===false){
         console.log("Not Admin")
         navigate('/')
         alert("Not authorized")
       }
       else {console.log("Admin")}
   }
  useEffect(() => {
    checker()
  }, [])
  const {isLoading} = useContext(EthersContext)
  return (
    isLoading?<Loader/>:
    <AdminPanel></AdminPanel>
  )
}

export default AdminPage