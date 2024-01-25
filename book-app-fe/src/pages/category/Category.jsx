import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
export default function Category(props) {
  const [category, setCategory] = useState([]);
  const [isAdmin, setIsAdmin] = useState(props.isAdmin); // Assuming you have a state for admin status
  useEffect(() => {
    axios.get('/user/detail')
      .then(response => {
        setIsAdmin(response.data.isAdmin); // Assuming you get isAdmin property from the server
      })
      .catch(error => {
        console.error('Error fetching user information:', error);
      });
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
    <>
    {isAdmin && (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link className="btn btn-success" to="add">Add Category</Link>
      </div>
    )}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px", // Increased the gap between cards
        paddingBottom: "200px",
      }}
    >
      {category.map((category) => (
        <div key={category._id}>
          <Card style={{ width: "250px", height: "350px" }}> {/* Adjusted width and height for the Card */}
            <Link to={`/category/view/${category._id}`}>
              <img
                src={category.image}
                alt={`Cover for ${category.name}`}
                style={{
                  width: "100%",
                  height: "220px", // Adjusted height for the image
                  objectFit: "cover",
                }}
              />
            </Link>
            <div className="card-body" style={{ maxHeight: "50px" }}>
              <h5 className="card-title">{category.name}</h5>
            </div>
          </Card>
        </div>
      ))}
    </div>
    </>
  );
}







