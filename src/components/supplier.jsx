class Supplier extends React.Component {
  render() {
    return(
      <div className="supplier">
      <p className="supplier-name">{this.props.name}</p>
      <p className="supplier-products">{this.props.products}</p>
      <div className="supplier-footer">
      <a href="#" className="supplier-footer-delete">
      Delete Supplier
      </a>
      </div>
      </div>
      )
  }

  _handleDelete(event){
    event.preventDefualt();
    this.props.onDelete(this.props.supplier);
  }
}