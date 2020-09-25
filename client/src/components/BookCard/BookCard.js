import React, { useState } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const BookCard = props => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  savedState.handleSavedBook = event => {
    event.preventDefault()
    
    // execute post request to save our book into the database
    
  }

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
            <Button onClick={savedState.handleSavedBook}>Save</Button>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default BookCard