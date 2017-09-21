class ProductBox extends React.Component {

  constructor() {
    super();

    this.state = {
      products:[];
    }
  }

  _getProducts(){
  
    return this.state.products.map((product) =>{
      return( <Product
        supplier={product.supplier}
        name={product.name} 
        price={product.price}
        key={product.id}
        onDelete={this._deleteProduct.bind(this)}/>
        );
    });
  }

  render() {
    const products = this._getProducts();
    return(
      <div classname="product-box">
      <ProductForm addProduct={this._addProduct.bind(this)}/>
      <h3>Products</h3>
      <div className="product-list">
      {products}
      </div>
      </div>
      )
  }

  _addProduct(name,supplier,price){
    const product ={
      name, supplier, price
    };
    jQuery.post('/api/v1/products',{product})
    .success(newProduct => {
      this.setState({products: this.state.products.concat([newProduct])
      })
    });
  }

  _deleteProduct(product){
    jQuery.ajax({
      method:'DELETE',
      url: '/api/v1/products/${product.id}'
    });

    const products = [...this.state.products];
    const productIndex = products.indexOf(product);
    products.splice(productIndex, 1);
    this.setState({products});
  }

  componentWillMount(){
    _reqProducts();
  }

  componentDidMount(){
    this._timer = setInterval(() => this._reqProducts(), 5000);
  }

  componentWillUnmount(){
    clearInterval(this._timer);
  }

  _reqProducts(){
    jQuery.ajax({
      method:'GET',
      url: '/api/v1/products',
      success: (products) =>{
        this.setState({products})
      }
    });
  }
}