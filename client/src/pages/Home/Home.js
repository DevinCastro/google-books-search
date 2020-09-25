import React, { useState } from 'react'
import { Container, Jumbotron, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import axios from 'axios'


const Home = props => {

  const [bookState, setBookState] = useState({
    book: '',
    books: []
  })

  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleBookSearch = event => {
    event.preventDefault()
    console.log('vince vapes')
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

              <Form>
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
        </div>
      </Container>
    </>
  )
}

export default Home