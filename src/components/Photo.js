import React,{useEffect,useState} from 'react';
import Axios from "axios";

let Photo = () => {
    let[img,setImg]=useState([])

    useEffect(() => {
        console.log('Fetching Data from Server');
        Axios.get('https://gist.githubusercontent.com/rohitjsarma/3863c9ec515006e8a0277f0b29aded91/raw/b5e61b0ab9cb400b0104ac4551ccd728687e655c/photos').
        then((response) => {
            setImg(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, );

    return (
        <div>
            <pre>{JSON.stringify(img)}</pre>
          <div className="container mt-5">
                  <div className="row">
                      <div className="col"><small className="display-4 font-italic text-center text-danger">Album</small>
                          <div className="card">
                              <div className="card-body">
                                  <table className="table">
                                      <thead className="thead-dark">
                                      <tr>
                                          <th scope="col">Albumid</th>
                                          <th scope="col">Title</th>
                                          <th scope="col">Url</th>
                                          <th scope="col">Thumb Url</th>

                                      </tr>
                                      </thead>
                                      <tbody>
                                      {
                                          img.length>0?<React.Fragment>
                                              {
                                                  img.map((img)=>{
                                                    return(
                                                        <tr key={img.id}>
                                                            <td>{img.id}</td>
                                                            <td>{img.title}</td>

                                                            <td>
                                                                <a target="_blank" href={img.thumbnailUrl}>
                                                                    <td>
                                                                        <img src={img.url} className="img-rounded" alt="Forest" />
                                                                    </td>

                                                                </a>
                                                            </td>

                                                            <td> <img src={img.thumbnailUrl} className="img-rounded" alt="Forest" /></td>
                                                        </tr>

                                                    )
                                                  })
                                              }
                                          </React.Fragment>:null
                                      }

                                      </tbody>

                                  </table>
                              </div>
                          </div>


                      </div>

                  </div>

          </div>

        </div>
    );
};

export default Photo;