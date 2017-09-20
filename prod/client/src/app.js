import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {render} from 'react-dom';
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';
import ProductList from './components/ProductList.jsx';
import Products from './containers/Products.jsx';
import Suppliers from './containers/Suppliers.jsx';

window.onload = () => {
  render(
    
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path="product" component={Product} />
    <Route path="productList" component={ProductList} />
    </Route>
    </Router>,
    document.getElementById('app')
    );