import React from 'react';
import Product from './Product.jsx';

const ProductList = ({product}) => {
  const productEach = product.map((product, index) => {
    return (
      <Product
        key={index}
        name={product.name}
        price={"£" +product.price}
        suppleir={product.supplier} />
    )
  });

  return (
    <div>
      {productEach}
    </div>
  );
}

export default ProductList;
