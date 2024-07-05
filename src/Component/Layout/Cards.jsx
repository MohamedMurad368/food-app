import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({ image, rating, title, paragraph, price ,renderRatingIcons }) => {
  return (
    <Col sm={6} md={4} lg={3} xl={3} className='mb-4'>
      <Card className="overflow-hidden">
        <div className="overflow-hidden img-top ">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist"><i className="bi bi-heart"></i></div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="menu_price">
              <h4 className='mb-0'>${price}</h4>
            </div>
            <div className="add_cart">
              <Link to="/">
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
