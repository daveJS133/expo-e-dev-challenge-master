import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
<nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="img/expo-e-logo-white-68px-2016.png" className="img-responsive" alt="Exponential-e"></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Search...">
            </form>
        </div>
    </div>
</nav>

<div className="container-fluid">
    <div className="row">
        <div className="col-sm-12 col-md-12 main">
            <h1 className="page-header">Product pricing</h1>

            <form>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label for="selSupplier">Supplier</label>
                        <select className="form-control" id="selSupplier">
                            <option>xxxx</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="selProduct">Product</label>
                        <select className="form-control" id="selProduct">
                            <option>xxxx</option>
                        </select>
                    </div>
                </div>
            </form>

            <h2 className="sub-header">Product details</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Supplier</th>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
document.getElementById('root')
  )
