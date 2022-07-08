import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap"
import styled from 'styled-components'

const Wrapper = styled(Navbar)`

`

function Navigation() {
  return (
    <Wrapper expand="lg">
      <Container>
        <Nav.Link as="div" href="#" style={{ padding: "0" }}>
          <Link className="navbar-brand" to="/">
            <img src="/img/logo2.png" alt="Cub Scouts Pack 99 Logo" height="40" width="40" /> Cub Scouts Pack 99
          </Link>
        </Nav.Link>
        {/* <Navbar.Toggle aria-controls="responsive-navnav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end" as="ul">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Wrapper>
  )
}

export default Navigation