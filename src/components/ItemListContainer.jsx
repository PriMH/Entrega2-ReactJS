import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockProducts = [
            { id: 1, name: "Producto 1", category: "electronics", price: 999 },
            { id: 2, name: "Producto 2", category: "clothing", price: 499 },
            { id: 3, name: "Producto 3", category: "electronics", price: 799 },
            { id: 4, name: "Producto 4", category: "clothing", price: 399 },
          ];
          const filtered = categoryId
            ? mockProducts.filter(p => p.category === categoryId)
            : mockProducts;
          resolve(filtered);
        }, 1000);
      });
    };

    fetchProducts().then(data => setProducts(data));
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
