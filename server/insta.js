'use strict'; // eslint-disable-line semi

const axios = require('axios')
const insta = require('express').Router()

const instas = []

insta.post('/', (req, res, next) => {
  const long = req.body.long
  const lat = req.body.lat
  axios.get(`https://api.instagram.com/v1/locations/search?lat=${lat}&lng=${long}&access_token=44777266.6e2f470.5d36538774f44528884d22e971a3a5ee`)
    .then(response => response.data)
    .then(locationData => {
      locationData.data.forEach(location => {
        axios.get(`https://api.instagram.com/v1/locations/${location.id}/media/recent?access_token=44777266.6e2f470.5d36538774f44528884d22e971a3a5ee`)
          .then(response => {
            if (response.data.data.length){
              return response.data.data
            }
          })
          .then(instaData => {
            if (instaData){
              instaData.forEach((gram, index) => {
                instas.push({
                  time: gram.created_time,
                  image: gram.images.standard_resolution,
                  location: gram.location.name,
                  user: gram.user.username,
                  caption: gram.caption.text,
                  likes: gram.likes.count
                })
                console.log(instas);
              })
            }
          })
          .catch(next)
        })
      return instas;
    })
    .then(instas => res.json(instas))
    .catch(next)
})



module.exports = insta