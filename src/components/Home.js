import React, {useEffect, useState} from 'react';

function Home(props) {
    let [currentTime , setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // component did mount
        let timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            // componentWillUnmount
            clearInterval(timer);
        }
    });
    return (
        <React.Fragment>


         <div className="landing-page">
             <div className="wrapper">
                 <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                     <h1 >Welcome to the React Redux Routing Employee Details </h1>
                     <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque doloremque, ea eaque earum enim esse est et excepturi facere hic id maiores nam necessitatibus numquam possimus quae vitae voluptates.</p>
                     <h2 className="display-3">{currentTime}</h2>
                 </div>

             </div>
             {/*<div className="card">*/}
             {/*    <div className="card-header">*/}

             {/*    </div>*/}
             {/*    <div className="card-body display-3">*/}

             {/*    </div>*/}
             {/*</div>*/}

         </div>


        </React.Fragment>
    );
}

export default Home;