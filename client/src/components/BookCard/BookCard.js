import React from 'react'
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const BookCard = props => {


  return (
    <>
      <div>
        <Card>
          <Row>
            <Col sm ='3'> 

              <CardImg className="test" src={props.image} alt={props.title} />
            </Col>
          
          <Col sm='9'>
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>Written by: {props.authors}</CardSubtitle>
            <br/>
            <CardText>Description: {props.description}</CardText>
            <a href={props.link}>
              <Button>View</Button> {' '}
            </a>
            <Button onClick={() => props.handleSaveBook(props.id)}>Save</Button>
          </CardBody>
          </Col>

          </Row>
        </Card>
      </div>
    </>
  )
}

export default BookCard