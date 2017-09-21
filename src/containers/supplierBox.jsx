class SupplierBox extends React.Component {

  constructor() {
    super();

    this.state = {
      suppliers:[]
    }
  }

  _getSuppliers(){
    return this.state.suppliers.map((supplier)=>{
      return( <Supplier
        key={supplier.id}
        name={supplier.name}
        onDelete={this._deleteSupplier.bind(this)} 
        />
        );
    });
  }

  render() {
    const suppliers = this._getSuppliers();
    return(
      <div classname="supplier-box">
      <SupplierForm addSupplier={this._addSupplier.bind(this)}/>
      <h3>Suppliers</h3>
      <div className="supplier-list">
      {suppliers}
      </div>
      </div>
      )
  }

  _addSupplier(name){
    const supplier ={
      name
    };
    jQuery.post('/api/v1/supplier',{supplier})
    .success(newSupplier => {
      this.setState({suppliers: this.state.suppliers.concat([newSuppler])
      })
    });
  }

  _deleteSupplier(supplier){
    jQuery.ajax({
      method:'DELETE',
      url: '/api/v1/suppliers/${supplier.id}'
    });

    const suppliers = [...this.state.suppliers];
    const supplierIndex = suppliers.indexOf(supplier);
    suppliers.splice(supplierIndex, 1);
    this.setState({suppliers});
  }

  componentWillMount(){
    _reqSuppliers();
  }

  componentDidMount(){
    this._timer = setInterval(() => this._reqSuppliers(), 5000);
  }

  componentWillUnmount(){
    clearInterval(this._timer);
  }

  _reqSuppliers(){
    jQuery.ajax({
      method:'GET',
      url: '/api/v1/suppliers',
      success: (suppliers) =>{
        this.setState({suppliers})
      }
    });
  }
}