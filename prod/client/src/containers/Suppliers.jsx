import React from 'react';
import PeopleList from '../components/SuppliersList.jsx';

class Supplier extends React.Component{
  constructor() {
    super();
    this.state = {supplier: []}
  }

  componentDidMount() {
    let url = 'http://localhost/api/v1/suppliers'
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const supplierList = responseData.results;
      this.setState({supplier: supplierList});
    }

    request.send();
  }

  render() {
    return(<SupplierList supplier={this.state.supplier} />)
  }
}

module.exports = Supplier;