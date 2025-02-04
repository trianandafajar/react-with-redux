import { combineReducers } from "redux";
import accountReducer from './accounReducer';

const reducers = combineReducers({
    account: accountReducer
})

export default reducers;