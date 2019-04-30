import { combineReducers } from 'redux';
import { representativesReducer } from './representativesReducer';
import { politicianReducer } from './politicianReducer';
import { idReducer } from './idReducer';
import { financesReducer } from './financesReducer';

export default combineReducers({
  representatives: representativesReducer,
  politician: politicianReducer,
  id: idReducer,
  finances: financesReducer
})
