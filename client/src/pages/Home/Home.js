import React, { useState } from 'react'
import { Container, Jumbotron, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import BookCard from '../../components/BookCard'

const Home = () => {

  const [bookState, setBookState] = useState({
    book: '',
    books: []
  })

  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleBookSearch = event => {
    event.preventDefault()
    
    // fire axios request to googlebooks api
    axios.get(`/api/googlebooks/${bookState.book}`)
      .then(({data}) => {
        console.log(data)

        setBookState({ ...bookState, books: data, book: '' })
      })
      .catch(err => console.log(err))
  }



  return (
    <>
      <Container>
        <div>

          <Jumbotron>
            <h1 className="display-3">Google Book Search</h1>
            <p className="lead">Search or your favorite books! Then save them to your dashboard</p>
            <hr className="my-2" />

            <div>

              <Form onSubmit={bookState.handleBookSearch}>
                <FormGroup>
                  <Label for="book">Book Name</Label>
                  <Input
                    type="text"
                    name="book"
                    value={bookState.book}
                    onChange={bookState.handleInputChange}
                  />
                </FormGroup>
                <Button onClick={bookState.handleBookSearch}>Search</Button>
              </Form>

            </div>

          </Jumbotron>

          <div>

            {
              bookState.books.length > 0 ? (
                bookState.books.map(book => (
                  <BookCard
                    key={book.googleId}
                    id={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    />
                ))
              ) : null
            }

          </div>




        </div>
      </Container>
    </>
  )
}

export default Home