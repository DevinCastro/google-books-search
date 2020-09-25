const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')


// set up the get request to fire an ajax request to the google books api
router.get('/googlebooks/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data }) => data.items.map(book => ({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      googleId: book.id
    })))
    // .then(apiMedia => Media.find()
    //   .then(media => apiMedia.filter(data =>
    //     media.every(dbData => dbData.imdbID !== data.imdbID))))
    .then((book) => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router
