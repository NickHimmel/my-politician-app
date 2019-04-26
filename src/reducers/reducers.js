import { combineReducers } from 'redux';
import { idReducer } from './idReducer'
import { politicianReducer } from './politicianReducer'
import { financesReducer } from './financesReducer'

export default combineReducers({
  id: idReducer,
  politician: politicianReducer,
  finances: financesReducer
})
