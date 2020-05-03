import utils from './utils.js'
import axios from 'axios'

const BASE_URL = 'http://localhost:3004/api/toy'

export default {
  query,
  deleteToy,
  saveToy,
  getToyById
}

function query() {
  return axios.get(`${BASE_URL}`).then(res => res.data)
}

function saveToy(toy) {
  if (toy._id) return _updateToy(toy)
  else return _addToy(toy)
}

function getToyById(toyId) {
  return axios.get(`${BASE_URL}/${toyId}`).then(res => res.data)
}

function _addToy(toy) {
  toy = _createToy(toy.name, toy.img, toy.price, toy.type, toy.inStock)
  return axios.post(`${BASE_URL}`, toy).then(res => res.data)
}

function _updateToy(toy) {
  return axios.put(`${BASE_URL}/${toy._id}`, toy).then(res => res.data)
}


function deleteToy(toyId) {
  return axios.delete(`${BASE_URL}/${toyId}`)
}


//creating new toy

function _createToy(name, img, price, type, inStock) {
  return {
    _id: utils.getRandomID(),
    name,
    img: img ? img : "https://jewishjournal.com/wp-content/uploads/2018/05/netta_twitter-1.jpg",
    price: price ? price : "FREE!",
    type: type ? type : "general",
    createdAt: new Date().toLocaleDateString("en-US"),
    inStock
  }
}