// App.js (React)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chatbot() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Busca os produtos do backend (Node.js + MySQL)
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleOrder = (productName) => {
    const message = `Olá! Eu gostaria de pedir o seguinte laço: ${productName}.`;
    const whatsappLink = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink; // Redireciona para o WhatsApp com a mensagem
  };

  return (
    <div>
      <h1>Loja de Laços</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
            <button onClick={() => handleOrder(product.name)}>
              Pedir via WhatsApp
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chatbot;
