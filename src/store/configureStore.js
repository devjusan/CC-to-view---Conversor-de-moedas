import { combineReducers, configureStore } from '@reduxjs/toolkit';

import currentData from './currentData';
import currentGraph from './currentGraph';

const reducer = combineReducers({ currentData, currentGraph });

const store = configureStore({ reducer });

export default store;
