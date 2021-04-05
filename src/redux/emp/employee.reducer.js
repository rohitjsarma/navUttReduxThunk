import {FETCH_EMP_REQUEST,FETCH_EMP_SUCCESS,FETCH_EMP_FAILURE} from "./employee.actionTypes";

export const EMPLOYEE_FEATURE_KEY ='emplist'
let initialState={
    loading:'false',
    emplist:[],
    errorMsg:''
};
let empReducer=(state=initialState,action)=>{

    let {payload,type}=action;
    switch(type) {
        case FETCH_EMP_REQUEST :
            return {
                ...state,
                loading : true
            };
        case FETCH_EMP_SUCCESS:
            return{
                ...state,
                loading: false,
                emplist: payload
            };
        case FETCH_EMP_FAILURE:
            return{
                ...state,
                loading:false,
                errorMsg: payload
            };
        default: return  state;
    }
};
export {empReducer};


