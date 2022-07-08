import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import colors from '../colors'

const Wrapper = styled.div`
  color: #eee;
  background-color: ${colors.black};

  .container {
    padding: 10px 0px;
  }
`

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            © {new Date().getFullYear()} Cub Scouts Pack 99
          </Col>
          <Col md={6} className="text-end">
            Website Built by <a href="https://brianmorrison.me" target="_blank">Brian Morrison II</a>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Footer