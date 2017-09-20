import React from 'react';

const Product = ({name, price, supplier}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Supplier: {supplier}</p>
    </div>
  )
}

export default Product;