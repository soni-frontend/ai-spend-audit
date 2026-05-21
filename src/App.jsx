import React from 'react';
import SpendForm from "./component/SpendForm";

function App() {
  return (
    <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#111' }}>AI Spend Audit</h1>
      <SpendForm />
    </div>
  );
}

export default App;