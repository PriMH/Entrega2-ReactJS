import React from 'react';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">{greeting}</h2>
            <p className="hero-subtitle">
              Descubre los mejores productos de tecnología al mejor precio
            </p>
            <button className="hero-button">Ver Productos</button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon shipping">🚚</div>
                <h3 className="feature-title">Envío Gratis</h3>
              </div>
              <p className="feature-description">
                Envío gratuito en compras mayores a $50.000
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon warranty">✓</div>
                <h3 className="feature-title">Garantía</h3>
              </div>
              <p className="feature-description">
                1 año de garantía en todos nuestros productos
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon support">📞</div>
                <h3 className="feature-title">Soporte 24/7</h3>
              </div>
              <p className="feature-description">
                Atención al cliente las 24 horas del día
              </p>
            </div>
          </div>
          
          {/* Products Preview */}
          <div className="products-section">
            <h3 className="section-title">Próximamente: Catálogo de Productos</h3>
            <div className="products-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="product-card">
                  <div className="product-image">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="product-info">
                    <h4 className="product-title">Producto {item}</h4>
                    <p className="product-description">Descripción del producto aquí</p>
                    <div className="product-footer">
                      <span className="product-price">$999</span>
                      <button className="product-button">Ver más</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemListContainer;