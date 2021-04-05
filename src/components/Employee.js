import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchEmp} from "../redux/emp/employee.actions";
import Spinner from  './spinner/Spinner';
import {EMPLOYEE_FEATURE_KEY} from "../redux/emp/employee.reducer";

let  Employee=()=> {
    let dispatch = useDispatch();

    let empInfo= useSelector((state)=>{
        return  state[EMPLOYEE_FEATURE_KEY];
    })

    // let getEmpDetails=()=>{
    //     dispatch(fetchEmp());
    // };

    return (
        <div>
            {/*<pre>{JSON.stringify(empInfo)}</pre>*/}

             <div className="container mt-3">
                <div className="row">
                    <div className="col">
                      <div className="card">
                          <div className="card-header">
                           Employee Details
                          </div>
                          <div className="card-body">
                          <table className="table">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">Eid</th>
                              <th scope="col">Ename</th>
                              <th scope="col">Gender</th>
                              <th scope="col">Dept</th>
                              <th scope="col">City</th>
                            </tr>
                          </thead>
                          <tbody>


                         {/* {
                              empInfo.emplist.length>0?<React.Fragment>
                                  {
                                      empInfo.emplist.map((e)=>{
                                          return(
                                              <tr key={e.id}>
                                                  <td>{e.id}</td>
                                                  <td>{e.ename}</td>
                                                  <td>{e.gender}</td>
                                                  <td>{e.dept}</td>
                                                  <td>{e.city}</td>
                                              </tr>
                                          )
                                      })
                                  }


                              </React.Fragment>:null
                          }*/}
                         {
                             empInfo.emplist.length>0?<React.Fragment>
                                 {
                                     empInfo.loading ? <Spinner/> :
                                         <React.Fragment>
                                             {
                                                 empInfo.emplist.map((e)=>{
                                                     return(

                                                             <tr key={e.id}>
                                                                 <td>{e.id}</td>
                                                                 <td>{e.ename}</td>
                                                                 <td>{e.gender}</td>
                                                                 <td>{e.dept}</td>
                                                                 <td>{e.city}</td>
                                                             </tr>

                                                     )
                                                 })
                                             }
                                         </React.Fragment>
                                 }
                             </React.Fragment> : null
                         }



                          </tbody>
                        </table>

                          </div>
                      </div>
                    </div>
                </div>
             </div>
            
        </div>
    )
}
export default Employee;