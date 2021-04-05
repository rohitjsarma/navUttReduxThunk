import {FETCH_EMP_REQUEST,FETCH_EMP_SUCCESS,FETCH_EMP_FAILURE} from "./employee.actionTypes";
import Axios  from  'axios';

let fetchEmpREQUEST=()=>{
    return{
        type:FETCH_EMP_REQUEST
    }
};
let fetchEmpSuccess=(empdetails)=>{
    return{
        type:FETCH_EMP_SUCCESS,
        payload:empdetails
    }
};
let fetchEmpFailure=(error)=>{
    return{
        type:FETCH_EMP_FAILURE,
        payload:error
    }
};
let fetchEmp=()=> {
    return (dispatch) => {
        dispatch(fetchEmpREQUEST());
        setTimeout(() => {

            Axios.get('https://gist.githubusercontent.com/rohitjsarma/b9817241841b03383a8ff08bbdef01c7/raw/ae1278ffa31c19c08b8a6544f3cfa7da0f609476/empDetails31March').then((response) => {
                dispatch(fetchEmpSuccess(response.data))
            }).catch((error) => {
                dispatch(fetchEmpFailure(error))
            });
        }, 1000)
    }
}



export {fetchEmp};