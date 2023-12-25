import { createStore } from 'redux'
import todoReducers from './services/reducers/todoReducer'


const store = createStore(todoReducers)


export default store;