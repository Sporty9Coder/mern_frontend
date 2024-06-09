import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function GrowerDash() {
    let navigate = useNavigate();

    function showgrowerprofile() {
        navigate("/gotoGProfile");
    }

    function AvailProduct() {
        navigate("/gotoavailproduct");
    }

    function itemmanager() {
        navigate("/gotoItemManager");
    }

    return (
        <>
        <div className='flex justify-center mt-14'>
            <div className='flex flex-col md:flex-row md:space-x-4 lg:flex-row lg:space-x-4'>
                <Card style={{ width: '18rem', margin: '20px', border: '0px', height: '100%' }}>
                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg" style={{ height: '200px', objectFit: 'contain' }} />
                    <Card.Body>
                        <input type="button" value="Profile" onClick={showgrowerprofile} className='border p-2 w-full md:w-28 lg:w-full shadow md:shadow-lg text-white bg-black rounded-md mt-3 mx-auto md:mx-10' />
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '20px', border: '0px', height: '100%' }}>
                    <Card.Img variant="top" src="https://clipground.com/images/organic-food-clipart-1.jpg" style={{ height: '200px', objectFit:'contain' }} />
                    <Card.Body>
                        <input type="button" value="Avail Products" onClick={AvailProduct} className='border p-2 w-full md:w-44 lg:w-full shadow md:shadow-lg mt-3 mx-auto md:mx-10 text-white bg-black rounded-md' />
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '20px', border: '0px', height: '100%' }}>
                    <Card.Img variant="top" src="https://classroomclipart.com/images/gallery/Clipart/Occupation/stock-manager-counting-carton-boxes.jpg" style={{ height: '200px', objectFit: 'contain' }} />
                    <Card.Body>
                        <input type="button" value="Items Manager" onClick={itemmanager} className='border p-2 w-full md:w-44 lg:w-full shadow md:shadow-lg mt-3 mx-auto md:mx-10 text-white bg-black rounded-md' />
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}
