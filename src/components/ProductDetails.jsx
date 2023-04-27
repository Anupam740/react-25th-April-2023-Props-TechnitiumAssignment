import React from 'react';
import './ProductDetails.css'

const ProductDetails = ({ product }) => {
  const { productId, productPic, productName, Brand, productDescription, Price,Rating } = product;

  const handleAddToCart = () => {
    alert(`Product of is ${productId}, which is ${productName} of brand ${Brand} has of rupees ${Price} is added in the cart, please proceed to pay!!!`);
  }

  return (
    <div className="product-card">
        <div className='ProductDetails'>

      <img id="productPic" src={productPic} alt={productName} />
      <h2>{productName}</h2>
      <h3>{Brand}</h3>
      <p>{productDescription}</p>
      <p>{`Price: ${Price}`}</p>
      <h4>{Rating}</h4>
      <button onClick={handleAddToCart}>Add to Cart</button></div>
    </div>
  );
}

export default ProductDetails;
