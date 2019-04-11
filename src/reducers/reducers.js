import { combineReducers } from 'redux';
import { idReducer } from './idReducer'
import { politicianReducer } from './politicianReducer'

export default combineReducers({
  id: idReducer,
  politician: politicianReducer
})
