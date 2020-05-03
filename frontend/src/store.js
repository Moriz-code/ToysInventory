import toyReducer from './reducers/toyReducer';
import { createStore, applyMiddleware, combineReducers, compose } from 'Redux';

const thunk = ReduxThunk.default;

const rootReducer = combineReducers({
  toy: toyReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);