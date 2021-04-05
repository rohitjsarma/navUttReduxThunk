import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col-8">
                        <div className="card  ">
                            <div className="card-header">
                               <p className="lead display-3 primary-color text-black-50">About us </p>
                            </div>
                            <div className="card-body">
                                <h2>Rohit sharma</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>rohit@utt.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                       {/*     <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        Contact Me
                                    </div>
                                    <div className="card-body">
                                     <ul className="list-group">
                                         <li className="list-group-item">1.ROHIT</li>
                                         <li className="list-group-item">2.Utthunga Tech </li>
                                         <li className="list-group-item">3.Banshankari</li>
                                         <li className="list-group-item">4.99**99**99</li>
                                         <li className="list-group-item">5.Bangalore</li>
                                     </ul>
                                    </div>
                                </div>
                            </div>*/}

                            <div className="card-footer">
                                <i className="fa fa-copyright dan "></i> <b className="font-weight-bold font-italic text-center text-danger">Copyright @Utthunga rohit.s 2021</b>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;