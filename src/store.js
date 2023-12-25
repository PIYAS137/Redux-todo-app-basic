import {createStore} from 'redux'
import counterReducer from './services/reducres/counterReducrer'


const store = createStore(counterReducer);


export default store;