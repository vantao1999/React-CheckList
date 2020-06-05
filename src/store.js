import {createStore} from 'redux';
import rootReducer from './Reducers/indexReducer';

let store = createStore(rootReducer);

export default store;
