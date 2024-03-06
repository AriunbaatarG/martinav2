import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState } from 'react';
import Products from '../components/Products';
import OrderForm from '../components/OrderForm';

function Prints() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
  };

  const handleOrderSubmission = (formData) => {
    // Handle order submission logic here
    console.log('Form data:', formData);
    console.log('Selected product:', selectedProduct);
    // You can send form data and selected product to a backend for further processing
  };

  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 15, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 25, image: 'product4.jpg' },
    { id: 5, name: 'Product 5', price: 30, image: 'product5.jpg' },
    { id: 6, name: 'Product 6', price: 18, image: 'product6.jpg' }
  ];

  return (
    <div className="prints">
        <Header/>
        <Products products={products} handleProductSelection={handleProductSelection} />
        {selectedProduct && <OrderForm selectedProduct={selectedProduct} handleOrderSubmission={handleOrderSubmission} />}
        <Footer/>
    </div>
  );
}

export default Prints;