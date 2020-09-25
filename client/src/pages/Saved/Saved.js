import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Saved = props => {

  const [savedState, setSavedState] = useState({
    saved: []
  })


  useEffect(() => {
    axios.get('/api/books')
      .then(({ data }) => {
        console.log(data)
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  savedState.handleDeleteBook = id => {
    axios.delete(`/api/books/${id}`)
      .then(() => {
        // filter throught the saved books and get rid of the book you just deleted
        let saved = savedState.saved.filter(media => media._id !== id)
        setSavedState({ ...savedState, saved })
      })
      .catch(err => console.log(err))
      
  }


  return (
    <>
      <h1>Saved page</h1>
      <Container>

        {
          savedState.saved.length > 0 ? (
            savedState.saved.map(book => (
              <div>
                <Card>
                  <CardImg src={book.image} alt={book.title} />
                  <CardBody>
                    <CardTitle>{book.title}</CardTitle>
                    <CardSubtitle>Written by: {book.authors}</CardSubtitle>
                    <CardText>{book.description}</CardText>
                    <a href={book.link}>
                      <Button>View</Button> {' '}
                    </a>
                    <Button onClick={() => savedState.handleDeleteBook(book._id)}>Delete</Button>
                  </CardBody>
                </Card>
              </div>
            ))
          ) : null
        }

      </Container>


    </>
  )
}

export default Saved