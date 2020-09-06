import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header(props) {
    return(
    <Jumbotron className="bg-transparent jumbotron fluid p-0"> 
    <Container fluid={true}>
    <Row className="justify-content-center py-5">
    <Col md={8} sm={12}>
    { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
    { props.SubTitle && <h3 className="display-4 font-weight-light">{props.SubTitle}</h3> }
    { props.text && <h3 className="Lead font-weight-light">{props.text}</h3> }
    </Col>
    </Row>
    </Container>
    
    </Jumbotron>
    )
}

export default Header;