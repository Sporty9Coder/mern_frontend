import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function ConsumerDash() {
  const navigate=useNavigate();

  function fetchGrower()
  {
    navigate("/fetchgrower");
  }

  return (
    <div className='m-auto w-96'>
    <Card style={{ width: '18rem', margin: '20px',border:'0px' }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/004/985/994/original/cartoon-farmer-with-farmland-background-free-vector.jpg" />
      <Card.Body>
      <input type="button" value="Find Grower" onClick={fetchGrower} className='border p-2 w-28 shadow md:shadow-lg text-white bg-black rounded-md mt-3 mx-10'/>
      </Card.Body>
    </Card>
    </div>
  )
}
