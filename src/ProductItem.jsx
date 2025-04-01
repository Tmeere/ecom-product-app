import React from "react";
import "./styles.css";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.productImage} alt={product.productName} />
      <div className="product-details">
        <div className="product-title">{product.productName}</div>
        <div className="product-description">{product.productDescription}</div>
        <div className="product-cost">${product.productCost.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ProductItem;