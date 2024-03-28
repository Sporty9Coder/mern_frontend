import React from 'react'
import { useNavigate, Routes, Route, Router } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

export default function GrowerDash() {
  let navigate=useNavigate();

  function showgrowerprofile()
  {
    navigate("/gotoGProfile");
  }

  function AvailProduct()
  {
    navigate("/gotoavailproduct")
  }

  function itemmanager()
  {
    navigate("/gotoItemManager")
  }

  return (
    <div className='flex mt-5 ml-56'>
    <Card style={{ width: '18rem', margin: '20px',border:'0px' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg" />
      <Card.Body>
      <input type="button" value="Profile" onClick={showgrowerprofile} className='border p-2 w-28 shadow md:shadow-lg text-white bg-black rounded-md mt-3 mx-10'/>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:'20px',border:'0px', marginTop:'160px' }}>
      <Card.Img variant="top" src="https://clipground.com/images/organic-food-clipart-1.jpg" />
      <Card.Body>
        <input type="button" value="Avail Products" onClick={AvailProduct} className='border p-2 w-44 shadow md:shadow-lg mt-3 mx-10 text-white bg-black rounded-md'/>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:'20px',border:'0px',marginTop:'78px' }}>
      <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Clipart/Occupation/stock-manager-counting-carton-boxes.jpg" />
      <Card.Body>
        <input type="button" value="Items Manager" onClick={itemmanager} className='border p-2 w-44 shadow md:shadow-lg mt-3 mx-10 text-white bg-black rounded-md'/>
      </Card.Body>
    </Card>
    </div>
  )
}
