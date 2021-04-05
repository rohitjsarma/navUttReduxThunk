import React, {Component} from 'react';
import Axios from "axios";

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state={
            stocks:null,
            errorMsg:null
        }
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/rohitjsarma/e9e084ba451d8439c57bb282d329c912/raw/17351c9758e806235c5ba547c516322da2a7c3d2/stocksUtt2April').then((response) => {
            this.setState({
                stocks : response.data
            });
        }).catch((err) => {
            this.setState({
                errorMsg : err
            });
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="conatiner mt-3">
                                <div className="card">
                                    <div className="card-header text-center text-danger font-weight-bold">
                                        Fetching Stock list
                                    </div>
                                    <div className="card-body">
                                        {/*<pre>{JSON.stringify(this.state.stocks)}</pre>*/}
                                        <table className="table table-dark">
                                            <thead className="text-danger bg-default">
                                            <tr>
                                                <th  scope="col">ID</th>
                                                <th scope="col">NAME</th>
                                                <th scope="col">MARKET</th>
                                                <th scope="col">INDUSTRY</th>
                                                <th scope="col">SECTOR</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                this.state.stocks ? <React.Fragment>

                                                    {
                                                        this.state.stocks.map((stocks) => {
                                                            return(
                                                                <tr key={stocks.id}>
                                                                    <td>{stocks.id}</td>
                                                                    <td>{stocks.name}</td>
                                                                    <td>{stocks.market}</td>
                                                                    <td>{stocks.industry}</td>
                                                                    <td>{stocks.sector}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment> : null
                                            }
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="card-footer">
                                        <i className="fa fa-copyright "></i><b className="font-weight-bold font-italic text-center text-danger">@Utthunga rohit.s 2021</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Stock;