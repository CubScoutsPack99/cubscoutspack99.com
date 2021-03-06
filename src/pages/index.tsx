import React from 'react'
import Layout from '../layout'
import styled from 'styled-components'
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap'
import HomeCard from '../components/HomeCard'
import colors from "../colors"
import { generatePhotoPlaceholderURL  } from 'react-placeholder-image'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const placeholderImageURL = generatePhotoPlaceholderURL(1320, 400);

const Wrapper = styled(Layout)`
  .home-container {
    padding: 20px 0px;
    position: relative;

    .hero-image {
      position: absolute;
      z-index: -1;
    }

    .hero-content-wrapper {
      margin: 0px 10px;
      background: url(${placeholderImageURL});
      display: flex;
      flex-direction: column;
      align-items: end;
      border-radius: 5px;
    }

    .hero-content {
      height: 400px;
      max-width: 300px;
      background-color: ${colors.blue}dd;
      color: ${colors.textLight};
      padding: 10px;
      border-radius: 0px 5px 5px 0px;
    }

    .hero-title {
      font-weight: bold;
    }
  }

  .hero-container {
    img {
      border-radius: 5px;
    }
  }

  .contact-form-row-wrapper {
    border-top: 4px solid ${colors.yellow};
    border-bottom: 4px solid ${colors.yellow};
    color: ${colors.textLight};
    background-color: ${colors.blue};
    padding: 10px 0px;
    border-radius: 5px;
    margin: 0px 10px;

    .contact-form {
      margin: 0px 10px;
    }
  }
`

function Home() {
  return (
    <Wrapper>
      <Container className="home-container hero-container">
        {/* <Image className="hero-image" fluid src={placeholderImageURL} /> */}
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Join Today!
            </h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh id sapien ornare feugiat.
            </div>
          </div>
        </div>
      </Container>
      <Container className="home-container">
        <Row>
          <Col md={4}>
            <HomeCard title="Title" icon={faCoffee}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh id sapien ornare feugiat. Sed sit amet dolor non turpis aliquam consequat. Phasellus volutpat libero tellus, quis dapibus ligula ultricies eget.
            </HomeCard>
          </Col>
          <Col md={4}>
            <HomeCard title="Title" icon={faCoffee}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh id sapien ornare feugiat. Sed sit amet dolor non turpis aliquam consequat. Phasellus volutpat libero tellus, quis dapibus ligula ultricies eget.
            </HomeCard>
          </Col>
          <Col md={4}>
            <HomeCard title="Title" icon={faCoffee}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh id sapien ornare feugiat. Sed sit amet dolor non turpis aliquam consequat. Phasellus volutpat libero tellus, quis dapibus ligula ultricies eget.
            </HomeCard>
          </Col>
          <Col md={4}>
            <HomeCard title="Title" icon={faCoffee}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh id sapien ornare feugiat. Sed sit amet dolor non turpis aliquam consequat. Phasellus volutpat libero tellus, quis dapibus ligula ultricies eget.
            </HomeCard>
          </Col>
          <Col md={4}>
            <HomeCard title="Title" icon={faCoffee}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh id sapien ornare feugiat. Sed sit amet dolor non turpis aliquam consequat. Phasellus volutpat libero tellus, quis dapibus ligula ultricies eget.
            </HomeCard>
          </Col>
          <Col md={4}>
            <HomeCard title="Title" icon={faCoffee}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh id sapien ornare feugiat. Sed sit amet dolor non turpis aliquam consequat. Phasellus volutpat libero tellus, quis dapibus ligula ultricies eget.
            </HomeCard>
          </Col>
        </Row>
      </Container>
      {/* <div className=""> */}
        <Container className="home-container">
          <Row className="contact-form-row-wrapper">
            <Col md={6} sm={12} className="mx-auto text-center">
              <h2>Questions? Send us a note!</h2>
              <span>We'll get back to you as soon as possible.</span>
              <Form className="contact-form text-start">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="input" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="input" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Enter message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      {/* </div> */}
    </Wrapper>
  )
}

export default Home