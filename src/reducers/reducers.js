import { combineReducers } from 'redux';
import { politicianReducer } from './politicianReducer'

export default combineReducers({
  politician: politicianReducer
})
