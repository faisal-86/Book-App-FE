import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

export default function Category(props) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("/category/index")
      .then((response) => {
        console.log("Category API Response:", response);
        setCategory(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="mt-4">
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {category.map((category) => (
          <Col key={category._id} className="mb-4">
            <Card style={{ height: "100%" }}>
              <Link to={`/category/view/${category._id}`}>
                <Card.Img
                  src={category.image}
                  alt={`Cover for ${category.name}`}
                  style={{
                    objectFit: "cover",
                    height: "200px", // Adjust the height as needed
                  }}
                />
              </Link>
              <Card.Body>
                <h5 className="card-title">{category.name}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
