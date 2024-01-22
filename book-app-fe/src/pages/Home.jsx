import React from 'react'
import Card from 'react-bootstrap/Card';


export default function Home() {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='./images/Capture01.png'  /> 
            <Card.Body>
                <Card.Title>نظرية الفستق</Card.Title>
            </Card.Body>
    </Card>
  );
}

