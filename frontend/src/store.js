import { createStore, combineReducers } from 'redux';

import { notification } from './reducers/notification';

const reducers = combineReducers({ notification });

const store = createStore(reducers);

export default store;