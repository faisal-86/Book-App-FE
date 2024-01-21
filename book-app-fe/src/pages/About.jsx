import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <Container className="py-5">
    <Row className="justify-content-center">
      <Col md={10} lg={8}>
        <h1 className="text-center mb-4">Welcome to Novagram</h1>
        <p>
          Novagram is your portal to a world of literary wonders, where stories come alive, and imaginations flourish. We believe in the transformative power of storytelling and strive to create a space that celebrates the magic of words.
        </p>
        <p>
          Our curated collection of novels spans diverse genres, offering something for every reader. Whether you're a seasoned bookworm or just starting your reading journey, Novagram is designed to be your companion on the literary adventure.
        </p>
        <p>
          Immerse yourself in our carefully selected library, where each novel is a doorway to new worlds, characters, and emotions. Novagram is more than a website; it's a community of passionate readers united by a love for books.
        </p>
        <p>
          Join us in exploring the vast realms of literature, connecting with fellow book enthusiasts, and discovering stories that captivate your heart and mind. Novagram invites you to be a part of a reading experience that goes beyond the pages.
        </p>
        <p className="text-muted text-center mt-4">
          Thank you for being a part of the Novagram community. Happy reading!
        </p>
      </Col>
    </Row>
  </Container>
);
};
  
  