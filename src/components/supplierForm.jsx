class SupplierForm extends React.Component {
  render() {
    return(
      <form className="supplier-form" onSubmit={this._handleSubmit.bond(this)}>
      <label>Add new supplier </label>
      <div className="supplier-form-fields">
      <input placeholder="Name:" ref={(input) => this._name = input}/>

      <div className="supplier-form-actions">
      <button type="submit">
      Post supplier
      </button>
      </div>
      </form>
      );
  }

  _handleSubmit(event){
    event.preventDefualt();

    let name = this._name;
    this.props.addSupplier(name.value);
  }
}