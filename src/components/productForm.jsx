class ProductForm extends React.Component {
  render() {
    return(
      <form className="product-form" onSubmit={this._handleSubmit.bond(this)}>
      <label>Add new product </label>
      <div className="product-form-fields">
      <input placeholder="Name:" ref={(input) => this._name = input}/>
      <textarea placeholder="Supplier:" ref={(textarea) => this._supplier = textarea}/>
      <textarea placeholder="Price:" ref={(textarea) => this._price = textarea}/>

      <div className="product-form-actions">
      <button type="submit">
      Post product
      </button>
      </div>
      </form>
      );
  }

  _handleSubmit(event){
    event.preventDefualt();

    let name = this._name;
    let price = this._price;
    let supplier = this._supplier;

    this.props.addProduct(name.value, supplier.value, price.value);
  }
}