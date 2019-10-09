import React,{Component}from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './CommonComponents/Navbar';
import BooksList from './CommonComponents/BooksList';
import Details from './CommonComponents/Details';
import Cart from './CommonComponents/Cart/Cart';
import Checkout from './CommonComponents/Checkout';
import Default from './CommonComponents/Default';
import Modal from './CommonComponents/Modal';

class App extends Component{
  render(){
    return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={BooksList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route  component={Default}/>
    </Switch>
    <Modal/>
    </>
    )
  }
}

export default App;
