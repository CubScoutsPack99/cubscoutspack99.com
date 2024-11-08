import React from 'react'
import Layout from '../layout'
import styled from 'styled-components'
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap'
import HomeCard from '../components/HomeCard'
import colors from "../colors"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
      background: url('/img/scouts-img.jpg');
      background-size: cover;
      background-repeat: no-repeat;
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

      a {
        color: white;
      }
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

  @media screen and (min-width: 960px) {
    .hero-content-wrapper {
      background-position-y: -250px !important;
    }
  }
`

function Home() {
  const frontPageBlocks = [
    {
      title: "Volunteer",
      content: "All cub scout packs are led by parent volunteers who prescribe the age-old Cub Scout Motto: “Do Your Best”. As kids grow out of scouts there is a constant need for parents to step in and help out. To see how you can help, or just to listen in on a parent leader meeting, email <a href=\"mailto:info@cubscoutpack99.com\">info@cubscoutpack99.com</a>",
    },
    {
      title: "Rainbow Council",
      content: "In addition to Pack and Den Events, we’re part of Rainbow Council which offers a variety of other events and campouts throughout the year. They own Rainbow Scout Reservation in Morris, which has terrific summer campouts and day-camps. They also have other opportunities on the calendar <a href=\"https://rainbowcouncil.org/calendar/\">here</a>.",
    },
    {
      title: "Annual Costs",
      content: "Costs change a bit every year based on committee decisions and BSA insurance requirements but are usually between $200-$250 per year. This can be paid directly or worked through a number of fundraisers participated in such as selling popcorn, gift cards, beef jerky or other fundraisers the pack offers to families.",
    },
    {
      title: "Den Meetings",
      content: "Cub Scouts separates the whole pack into grade-level dens which can meet between 1-3 times per month. The kids work on rank requirements and adventures during these meetings in their smaller groups and can form life-long friendships.",
    },
    {
      title: "Pack Outings",
      content: "In addition to routine Pack Nights, we have Cubmaster series hikes 4-6 times a year at different preserves. We also have 2 or 3 overnight events throughout the year as determined by Pack Committee. These are always at fun places like ballparks, orchards, museums, zoos, and other exciting spots.",
    },
    {
      title: "Pack Nights",
      content: "During the school year Pack meets once a month from September through May. Most of the time we meet at Riverview Gym on Friday evenings, but that sometimes changes based on events like Pinewood Derby, Cub Mobile Races, Blue & Gold Banquet, and Crossover Campout.",
    }
  ]

  return (
    <Wrapper>
      <Container className="home-container hero-container">
        {/* <Image className="hero-image" fluid src={placeholderImageURL} /> */}
        {/* <Image className="hero-image" fluid src="/img/scouts-img.jpg" /> */}
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Join Today!
            </h1>
            <div>
              Pack 99 takes new scouts all the time. Boys and Girls both welcome anytime and we are active all year round. Apply now <a href="https://my.scouting.org/VES/OnlineReg/1.0.0/?tu=UF-MB-702paa0099&_gl=1*17jf5v7*_ga*MzQ5MTIzODgwLjE1NTU1NTAzNjk.*_ga_20G0JHESG4*MTY1OTIwNTc4MS4zMS4xLjE2NTkyMDU3ODYuNTU.&_ga=2.198823084.2025299384.1659132899-349123880.1555550369">HERE</a> or for more information, please email <a href="mailto:info@cubscoutpack99.com">info@cubscoutpack99.com</a>.
            </div>
          </div>
        </div>
      </Container>
      <Container className="home-container">
        <Row>
          {frontPageBlocks.map((b, idx) => (
            <Col md={4} key={`fpb-${idx}`}>
              <HomeCard title={b.title} icon={faCoffee}>
                <div dangerouslySetInnerHTML={{__html: b.content}} />
              </HomeCard>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <div className=""> */}
        <Container className="home-container">
          <Row className="contact-form-row-wrapper">
            <Col md={6} sm={12} className="mx-auto text-center">
              <h2>Questions? Send us a note!</h2>
              <span>We'll get back to you as soon as possible.</span>
              <Form name="contact" className="contact-form text-start" data-netlify="true">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="input" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control name="phone" type="input" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control name="message" as="textarea" rows={5} placeholder="Enter message" />
                </Form.Group>
                <input type="hidden" name="form-name" value="contact" />
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