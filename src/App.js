import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {store} from "./redux/store";
import {Provider} from 'react-redux';
import './App.css';
import Employee from './components/Employee';
import Navbar from './components/navbar/Navbar';
import Stock from './components/Stock';
import Pricing from './components/Pricing';
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <div className="App">

      <Provider store={store}>
     <BrowserRouter>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/emp" component={Employee} />
         <Route exact path="/stock" component={Stock}/>
         <Route exact path="/pricing" component={Pricing} />
         <Route exact path="/about" component={About} />
       </Switch>
     </BrowserRouter>

   </Provider>

    </div>
  );
}

export default App;
