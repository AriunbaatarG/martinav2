import React from 'react';

function Products({ products, handleProductSelection }) {
  return (
    <div className="products">
      <h2>Choose a product:</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product" onClick={() => handleProductSelection(product)}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
