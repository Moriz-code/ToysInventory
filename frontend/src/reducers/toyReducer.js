const INITIAL_STATE = {
  items: [],
  currentToy: null
  // cartItems: [],
  // currItem: null
};

export default function toyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.items };

    case "DELETE_ITEM":
      const { id } = action;
      const idx = state.items.findIndex(item => item._id === id);
      return {
        ...state, items: [...state.items.slice(0, idx)]
      };

    case "UPDATE_ITEM":
      console.log('update');
      const { toy } = action
      return {
        ...state,
        items: state.items.map(item => item._id === toy._id ? toy : item)
      }


    case "SET_CURRENT_ITEM":
      return { ...state, currentToy: action.item };


    default:
      return state;
  }
}