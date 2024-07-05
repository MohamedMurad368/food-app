import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Burger from '../../src/Food_Assets/assets/hero/hero-2.png'
import { Link } from 'react-router-dom';
import  '../Stayle/Home.css'
const Section1 = () => {
  return (
<section className='hero_section'>
<Container>
<Row>
<Col lg={7} className='mb-5 mb-lg-0'>
<div className="position-relative">
<img src={Burger} className='img-fluid' alt="Hero" />
<div className="price">
<div className="text">
    <h4 className="h4-xs">only</h4>
    <h4 className="h3-lg">$6.99</h4>

</div>

</div>
</div>

</Col>
<Col lg={5}>

<div className="hero-text text-center ">
    <h1 className="text-white">New Burger</h1>
    <h2 className="text-white">with Onion</h2>
    <p className='text-white pt-2 pb-4'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sapiente possimus facilis architecto, repellendus et.
</p>
<Link to="/" className='btn order_now'>
Order Now
</Link>
</div>

</Col>

</Row>
</Container>
</section>
)
}

export default Section1