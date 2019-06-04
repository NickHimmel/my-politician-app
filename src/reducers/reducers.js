import { combineReducers } from 'redux';
import { politiciansReducer } from './politiciansReducer';
import { politicianReducer } from './politicianReducer';
import { idReducer } from './idReducer';
import { financesReducer } from './financesReducer';

export default combineReducers({
  politicians: politiciansReducer,
  politician: politicianReducer,
  id: idReducer,
  finances: financesReducer
})
