import ToyService from '../services/ToyService';

export function loadItems() {
  return (dispatch) => {
    ToyService.query()
      .then(toys => {
        dispatch(setItems(toys))
      })
  }
}

//the action creator
function setItems(items) {
  return {
    type: 'SET_ITEMS',
    items
  }
}

export function deleteItem(id) {
  return (dispatch) => {
    return ToyService.deleteToy(id)
      .then(() => dispatch(removeItem(id)))
      .then(() => dispatch(loadItems()))
  }
}

function removeItem(id) {
  return { type: 'DELETE_ITEM', id }
}


export const saveItem = toy => {
  const actionType = ((toy._id) ? updateItem(toy) : loadItems());
  return dispatch => {
    return ToyService.saveToy(toy)
      .then(() => dispatch(actionType))
  }
}

export const getItemById = id => {
  return dispatch => {
    return ToyService.getToyById(id)
      .then(toy => dispatch(setCurrentToy(toy)))
  }
}

function setCurrentToy(toy) {
  return {
    type: 'SET_CURRENT_ITEM',
    toy
  }
}

function updateItem(toy) {
  return {
    type: 'UPDATE_ITEM',
    toy
  }
}