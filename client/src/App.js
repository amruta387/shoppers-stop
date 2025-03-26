import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navibar/Navibar';

import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import { ProductProvider } from './context';

import './App.css';

class App extends Component {
  render(){
    return (
      <>
       
        <ProductProvider>
          <Router>
          <Navbar />
            <Switch>
              <Route>
                <Route exact path="/" component={Home} />
                <Route path="/ourproducts" component={ProductList}  />
                <Route path="/cart" component={Cart} />
              </Route>
            </Switch>
          </Router>
        </ProductProvider>
      </>
    );
  }
  
}

export default App;
