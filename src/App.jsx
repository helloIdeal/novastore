import { useState } from 'react';

export default function App() {
  const [items] = useState([
    { id: 1, name: 'Nova T-Shirt', price: 29.9 },
    { id: 2, name: 'Nova Hoodie', price: 59.9 },
    { id: 3, name: 'Nova Cap', price: 19.9 },
  ]);

  return (
    <main style={{ fontFamily: 'system-ui, Arial', padding: 24, maxWidth: 800, margin: '0 auto' }}>
      <h1>🛍️ NovaStore</h1>
      <p>Welcome to NovaStore — your mini React app deployed via Jenkins!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(x => (
          <li key={x.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
            borderBottom: '1px solid #ccc'
          }}>
            <span>{x.name}</span>
            <strong>${x.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
      <footer style={{ marginTop: 40, textAlign: 'center', fontSize: 14, color: '#666' }}>
        © 2025 NovaStore — Built with React + Vite + Jenkins
      </footer>
    </main>
  );
}
