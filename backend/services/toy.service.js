const fs = require('fs')

module.exports = {
  query,
  addToy,
  getToyById,
  deleteToy,
  editToy
}

let gToys = require('../data/toy.json')

function query() {
  return Promise.resolve([...gToys])
}


function addToy(toy) {
  const newToy = toy
  gToys.push(newToy)
  _saveToysToFile();
  return Promise.resolve(newToy)
}

function getToyById(toyId) {
  const toy = gToys.find(toy => toy._id === toyId)
  if (toy) return Promise.resolve(toy)
  else return Promise.reject('wrong Toy Id')
}

function deleteToy(toyId) {
  let toyIdx = gToys.findIndex((currentToy) => currentToy._id === toyId)
  if (toyIdx === -1) return Promise.reject('Cant Delete the user!');
  gToys.splice(toyIdx, 1)
  _saveToysToFile();
  return Promise.resolve(true)
}

function editToy(toyId, toyToEdit) {
  let toyIdx = gToys.findIndex(toy => toy._id === toyId);
  gToys[toyIdx] = toyToEdit;
  _saveToysToFile();
  return Promise.resolve(true);
}



function _saveToysToFile() {
  fs.writeFile('data/toy.json', JSON.stringify(gToys, null, 2), () => { console.log('file'); });
}
