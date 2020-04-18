const express = require('express');

const db = require('./data/dbConfig.js');

const router = express.Router();

router.get('/', ( req, res ) => {
  db('cars')
  .then(cars => {
    res.status(200).json(cars);
  })
  .catch( err => {
    res.status(400).json({message: 'Error retreiving Cars', err})
  })
})

router.get('/:id', ( req, res ) => {
  const { id } = req.params;
  db('cars')
  .where({id})
  .first()
  .then(cars => {
    if ( cars ) {
    res.status(200).json(cars);
    }else{
      res.status(400).json({message: 'The id you entered does not exist'})
    }
  })
  .catch( err => {
    res.status(400).json({message: 'Error retreiving Cars', err})
  })
})

router.put('/:id', ( req, res ) => {
  const { id } = req.params;
  const changes = req.body;
  db('cars')
  .where({ id })
  .update(changes)
  .then( obj => {
    if(obj){
      res.status(200).json({updated: obj.body});
    }else{
      res.status(400).json({message: 'Could not update car information with given id'})
    }
  }).catch( err => {
    res.status(500).json({Error: 'Error updating car information', err})
  })
})

router.post('/', ( req, res ) => {
  const data = req.body;
  db('cars')
  .insert(data)
  .then( data => {
    if(data){
      res.status(200).json(data);
    }else{
      res.status(400).json({message: 'Could not add new car information'})
    }
  }).catch( err => {
    res.status(500).json({Error: 'Error adding car information', err})
  })
})

router.delete('/:id', ( req, res ) => {
  const { id } = req.params;
  db('cars')
  .where({id})
  .del()
  .then( obj => {
    if ( obj > 0 ){
      res.status(200).json({message: 'Line was deleted'})
    } else { res.status(400).json({ message: 'Could not find line with given id' }) }
  })
  .catch( err => {
    res.status(500).json({ message: 'Error Deleting car information', err })
  })
})
module.exports = router;