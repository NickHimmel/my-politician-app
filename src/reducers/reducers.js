import { combineReducers } from 'redux';
import { representativesReducer } from './representativesReducer'
import { politicianReducer } from './politicianReducer'
import { financesReducer } from './financesReducer'

export default combineReducers({
  representatives: representativesReducer,
  politician: politicianReducer,
  finances: financesReducer
})
