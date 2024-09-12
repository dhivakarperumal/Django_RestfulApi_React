import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './App.css'

const Home = () => {
  return (
    <>
    <div className="home-page text-center">
      <h1>Welcome to the E-Learning Platform</h1>
      <p className="lead mt-4">
        Our platform offers a wide range of courses and resources to help you achieve your learning goals. 
        Whether you're looking to advance your career, develop new skills, or simply explore new interests, 
        we've got you covered.
      </p>
      <div className="mt-5">
        <Link to="/create" className="btn btn-primary me-3">
          Create a New Task
        </Link>
        <Link to="/viewItems" className="btn btn-secondary">
          View All Tasks
        </Link>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;


