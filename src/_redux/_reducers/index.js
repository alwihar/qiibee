import { combineReducers } from 'redux';
import login from './login.reducer';
import register from './register.reducer';
import checked from './checked.reducer';

const rootReducer = combineReducers({
    login,
    register,
    checked
});

export default rootReducer;