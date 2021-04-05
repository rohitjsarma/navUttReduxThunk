import {combineReducers} from 'redux';
import {EMPLOYEE_FEATURE_KEY, empReducer} from "./emp/employee.reducer";
let rootReducer = combineReducers({
    [EMPLOYEE_FEATURE_KEY]: empReducer
});
export {rootReducer};