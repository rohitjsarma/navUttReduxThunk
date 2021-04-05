import React , { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {fetchEmp} from "../../redux/emp/employee.actions";

let Navbar=()=> {

    let dispatch = useDispatch();
    let getEmpDetails=()=>{
        dispatch(fetchEmp());
    };
    return (

        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
       <Link to="/" className="navbar-brand">Home</Link>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="collapse navbar-collapse">

           <li className="nav-item px-3">

               <Link to="/emp" className="navbar-brand" onClick={getEmpDetails} >Employee</Link>
           </li>
            {/*<li className="nav-item px-3">*/}
            {/*    <Link to="/about" className="navbar-brand">{currentTime}</Link>*/}
            {/*</li>*/}
          <li className="nav-item px-3">
            <Link to="/stock" className="navbar-brand">Stock</Link>
          </li>
          <li className="nav-item px-3">
            <Link to="/pricing" className="navbar-brand">Pricing</Link>
          </li>
            <li className="nav-item px-3">
                <Link to="/about" className="navbar-brand">About</Link>
            </li>
        </ul>
      </div>



</nav>


            
        </div>
    )
}

export default Navbar
