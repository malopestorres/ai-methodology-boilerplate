/* Frontend React - AI-first methodology */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/api/items');
      setItems(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div className="error">Erro ao carregar itens: {error}</div>;
  }

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>AI-First Platform</h1>
        <p>Interface de gestão de itens</p>
      </header>

      <main>
        <section className="items-list">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description || 'Sem descrição'}</p>
              <small>ID: {item.id}</small>
              <small>Criado em: {new Date(item.createdAt).toLocaleDateString()}</small>
            </div>
          ))}
          {items.length === 0 && <p>Nenhum item encontrado.</p>}
        </section>
      </main>
    </div>
  );
};

export default App;