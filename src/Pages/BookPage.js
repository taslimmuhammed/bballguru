import React, { useContext ,useEffect, useState} from 'react'
import PdfViewer from '../components/PdfViewer/PdfViewer'
import { useNavigate } from 'react-router-dom';
import { EthersContext } from '../Context/EthersContext'

function BookPage() {
  const { checkAvailablity,getBalance } = useContext(EthersContext)
  const [Page, setPage] = useState(1)
  const navigate = useNavigate()
  const checker = async()=>{
    const test= await getBalance();
    console.log(test)
     if(test<1){
      navigate('/')
      alert("Not authorized")
      }
  }
   useEffect(() => {
     checker()
   }, [])
  return (
    <div>
      <div className="gradient__bg">
          <PdfViewer/>
      </div>
      </div>
  )
}

export default BookPage