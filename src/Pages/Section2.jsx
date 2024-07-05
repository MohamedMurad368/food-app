import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pizza from "../Food_Assets/assets/about/pizza.png";
import salad from "../Food_Assets/assets/about/salad.png";
import Delivery from "../Food_Assets/assets/about/delivery-bike.png";

const mockData = [
  {
    id: "0001",
    image: pizza,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw  Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: salad,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice as Porta semper lacus cursus, feugiat primis ultrice as`,
  },
  // Add more mock data objects as needed
];

const Section2 = () => {
  return (
    <>
      <section className='about_section'>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className='text-center'>
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illum molestias, quod, tempora et facilis animi suscipit vitae molestiae distinctio ut ducimus.</p>
              <Link to="/" className='btn order_now btn_red'>
                Explore full menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about_wrapper'>
        <Container>
          <Row className='justify-content-md-center'>
            {mockData.map((cardData, index) => (
              <Col key={cardData.id || index} md={6} lg={4} className='mb-4 md-mb-0'>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img src={cardData.image} className='img-fluid' alt="icon" />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
