import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const BookCard = props => {


  return (
    <>
      <div>
        <Card>
          <CardImg src={props.image} alt={props.title} />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>Written by: {props.authors}</CardSubtitle>
            <CardText>{props.description}</CardText>
            <a href={props.link}>
              <Button>View</Button> {' '}
            </a>
            <Button onClick={() => props.handleSaveBook(props.id)}>Save</Button>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default BookCard