import React,{useState,useEffect} from 'react';

function Pricing(props) {
    let[counter,setCounter]=useState(0)

    useEffect(() => {

        let timer = setInterval(() => {
            setCounter(counter+1)
        }, 1000);
        return () => {

            clearInterval(timer);
        }
    });

    return (
        <div>
           <div className="container mt-3 w-100">
               <div className="card text-center text-danger">
                   <div className="card-header">
                       <pre className="display-2 ">Pricing ={counter}</pre>
                   </div>
                   <div className="card-body">

                       {/*<button className="btn btn-lg btn-orange" onClick={incCounter}>Update Counter</button>*/}
                   </div>
               </div>
           </div>

        </div>
    );
}

export default Pricing;