import React, { useState } from 'react';

function OrderForm({ selectedProduct, handleOrderSubmission }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrderSubmission(formData);
  };

  return (
    <div className="order-form">
      <h2>Order Details:</h2>
      <p>Selected Product: {selectedProduct.name}</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email}onChange={handleChange} required/>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
