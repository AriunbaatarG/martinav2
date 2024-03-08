import React, { useState } from 'react';

function Products({ products, handleProductSelection }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct(product);
    handleProductSelection(product);
  };

  return (
    <div className="products">
      <h2>Choose a product:</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div
            key={index}
            className={`product ${selectedProduct && selectedProduct.id === product.id ? 'selected' : ''}`}
            onClick={() => handleClick(product)}
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>€{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
