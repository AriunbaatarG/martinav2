import React, { useState } from 'react';
import Products from '../components/Products';
import OrderForm from '../components/OrderForm';
import emailjs from '@emailjs/browser';
import IMG1 from '../assets/Landscape/Bremen Freimarkt/bf1.JPG';
import Footer from "../components/Footer";
import Header from "../components/Header";

function Prints() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
    setSubmitted(false);
  };

  const handleOrderSubmission = (formData) => {
    const templateParams = {
      username: formData.name,
      address: formData.address,
      email: formData.email,
      product: selectedProduct.name // Include selected product's name
    };

    emailjs.send('service_uj6h00n', 'template_u0yv1qa', templateParams, {
        publicKey: 'bRp1E_2AjdyrWol5f',
      })
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const products = [
    { id: 1, name: 'Bremen Pack of 3', price: 10, image: IMG1 },
    { id: 2, name: 'Bremen Pack of 6', price: 20, image: IMG1 },
    { id: 3, name: 'London Pack of 3', price: 10, image: IMG1 },
    { id: 4, name: 'London Pack of 6', price: 20, image: IMG1 },
    { id: 5, name: 'Art Pack 3', price: 15, image: IMG1 },
    { id: 6, name: 'Art Pack 6', price: 30, image: IMG1 }
  ];

  return (
    <div className="prints">
      <Header/>
      <Products products={products} handleProductSelection={handleProductSelection} />
      {selectedProduct && !submitted && <OrderForm selectedProduct={selectedProduct} handleOrderSubmission={handleOrderSubmission} />}
      {submitted && <p>Thank you for your order! Please check your email for further information.</p>}
      <Footer/>
    </div>
  );
}

export default Prints;
