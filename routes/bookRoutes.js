const router = require('express').Router()
const { Book } = require('../models')

router.get('/books', (req, res) => {
  Book.find()
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

router.post('/books', (req, res) => {
  Book.create(req.body)
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

// router.put('/books/:id', (req, res) => {
//   Book.findByIdAndUpdate(req.params.id, req.body)
//     .then(book => res.json(book))
//     .catch(err => console.log(err))
// })

router.delete('/books/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove())
    .then(book => res.json(book))
    .catch(err => console.log(err))
})

module.exports = router
