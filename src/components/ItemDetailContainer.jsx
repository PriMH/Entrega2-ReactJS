import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
import '../styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockProducts = [
            { id: 1, name: "Producto 1", category: "electronics", price: 999, description: "Descripción del producto 1", stock: 10 },
            { id: 2, name: "Producto 2", category: "clothing", price: 499, description: "Descripción del producto 2", stock: 5 },
            { id: 3, name: "Producto 3", category: "electronics", price: 799, description: "Descripción del producto 3", stock: 8 },
            { id: 4, name: "Producto 4", category: "clothing", price: 399, description: "Descripción del producto 4", stock: 3 },
          ];
          const found = mockProducts.find(p => p.id === parseInt(itemId));
          resolve(found);
        }, 1000);
      });
    };

    fetchProduct().then(data => setProduct(data));
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    alert(`Agregaste ${quantity} unidades de ${product.name} al carrito.`);
  };

  if (!product) return <div className="loading">Cargando...</div>;

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Precio: ${product.price}</p>
      <p className="product-stock">Stock disponible: {product.stock}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetailContainer;
