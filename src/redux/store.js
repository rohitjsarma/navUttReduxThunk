import {applyMiddleware,createStore} from "redux";
import {rootReducer} from "../redux/rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from "redux-thunk";


let store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
export {store};
//
// import {createStore} from "redux";
// import {rootReducer} from "./rootReducer";
// import {composeWithDevTools} from "redux-devtools-extension";
//
// let store = createStore(rootReducer, composeWithDevTools());
// export {store};