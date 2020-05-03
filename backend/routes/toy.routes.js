const toyService = require('../services/toy.service')

module.exports = (app) => {
  app.get('/api/toy', (req, res) => {
    //how the json knows where the file is?
    toyService.query().then((toys) => {
      res.json(toys)
    })
  })


  app.post('/api/toy', (req, res) => {
    // if (!req.session.loggedinUser) return res.status(401).json({ message: 'Please Log In!' })
    const toy = req.body;
    toyService.addToy(toy)
      .then((addedToy) => {
        // res.send(JSON.stringify(pet));
        res.json(addedToy);
      })
      .catch(err => {
        res.status(500).json({ err })
      })
  })

  // READ SINGLE
  app.get('/api/toy/:id', (req, res) => {
    // if (!req.session.loggedinUser) return res.status(401).json({ message: 'please log in!' })
    toyService.getToyById(req.params.id)
      .then((toys) => {
        res.json(toys);
      })
      .catch(err => {
        res.status(500).json({ err })
      })
  })

  app.delete('/api/toy/:id', (req, res) => {
    // if (!req.session.loggedinUser) return res.status(401).json({ message: 'log in!' })
    toyService.deleteToy(req.params.id)
      .then(() => {
        res.json({ message: 'toy deleted!' });
      })
      .catch(err => {
        res.status(500).json({ err })
      })
  })

  app.put('/api/toy/:id', (req, res) => {

    const toy = req.body;
    toyService.editToy(req.params.id, toy).then((toy) => {
      res.json(toy);
    }).catch(err => {
      res.status(500).json({ err })
    })
  })


}