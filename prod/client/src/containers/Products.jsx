import React from 'react';
import ProductList from '../components/ProductList.jsx';

class Products extends React.Component{
  constructor() {
    super();
    this.state = {products: []}
  }

  componentDidMount() {
    let url = 'http://localhost/api/v1/products'
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const productList = responseData.results;
      this.setState({products: productList});
    }

    request.send();
  }

  render() {
    return(<ProductList products={this.state.products}/>)
  }
}

module.exports = Products;