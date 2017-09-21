class Product extends React.Component {
  render() {
    return(
      <div className="product">
      <p className="product-name">{this.props.name}</p>
      <p className="product-products">{this.props.products}</p>
      <div className="product-footer">
      <a href="#" className="product-footer-delete">
      Delete Product
      </a>
      </div>
      </div>
      )
  }

  _handleDelete(event){
    event.preventDefualt();
    this.props.onDelete(this.props.product);
  }
}