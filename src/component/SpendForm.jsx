import React, { useState } from 'react';

const SpendForm = () => {
  // 1. State variables for input fields tracking specific AI tool configurations
  const [title, setTitle] = useState('Cursor'); 
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Pro'); 
  const [description, setDescription] = useState('coding'); 

  // 2. Initializing state from localStorage to ensure form data persistence across reloads
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('credex_ai_expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // 3. Synchronizing expenses state with localStorage whenever the stack updates
  React.useEffect(() => {
    localStorage.setItem('credex_ai_expenses', JSON.stringify(expenses));
  }, [expenses]);

  // 4. Handles form submission to append a newly audited AI tool to the current stack
  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title: title,        // Selected AI Tool Name
      amount: amount,      // Current Monthly Cost
      category: category,  // Selected Plan Tier
      description: description // Primary Workload/Use Case
    };

    setExpenses([...expenses, newExpense]);

    // Resetting specific input fields to defaults while clearing the amount
    setAmount('');
    setCategory('Pro');
    setDescription('coding');
  };

  // 5. Calculating cumulative monthly stack investment using the array .reduce() method
  const totalExpense = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  // 6. Removing an audited item from the active array pipeline using the .filter() method
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter(item => item.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div style={styles.formContainer}>
      
      {/* Dynamic Metrics Display Dashboard Card */}
      <div style={{
        backgroundColor: '#4F46E5',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '25px',
        boxShadow: '0 4px 6px rgba(79, 70, 229, 0.2)'
      }}>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.9, fontWeight: '600', letterSpacing: '1px' }}>TOTAL AI MONTHLY SPEND</p>
        <h1 style={{ margin: '5px 0 0 0', fontSize: '36px', fontWeight: 'bold' }}>₹{totalExpense}</h1>
      </div>

      <h2 style={styles.formTitle}>AI Spend Audit Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* 1. AI Tool Selection Menu */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Select AI Tool *</label>
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          >
            <option value="Cursor">Cursor</option>
            <option value="GitHub Copilot">GitHub Copilot</option>
            <option value="Claude">Claude (Anthropic)</option>
            <option value="ChatGPT">ChatGPT (OpenAI)</option>
            <option value="Gemini">Gemini (Google)</option>
            <option value="Windsurf">Windsurf</option>
          </select>
        </div>

        {/* 2. Monthly Pricing Parameter Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Current Monthly Spend (₹) *</label>
          <input
            type="number"
            placeholder="e.g., 1600"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* 3. Subscription License Tier Option */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Select Plan *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
          >
            <option value="Pro">Pro / Individual</option>
            <option value="Team">Team / Business</option>
            <option value="Enterprise">Enterprise</option>
            <option value="API Direct">API Direct</option>
          </select>
        </div>

        {/* 4. Workforce Primary Workload Dropdown */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Primary Use Case *</label>
          <select
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          >
            <option value="coding">Coding / Development</option>
            <option value="writing">Writing / Content</option>
            <option value="data">Data Analysis</option>
            <option value="research">Research</option>
            <option value="mixed">Mixed Use</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>Add to Audit</button>
      </form>

      {/* Dynamic Active Stack Audited List View Component */}
      <div style={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '15px', color: '#333', borderBottom: '2px solid #f4f6f9', paddingBottom: '5px' }}>📋 Tools in Current Stack</h3>
        
        {expenses.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center' }}>No tools added to the audit yet!</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {expenses.map((item) => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                <div>
                  <strong style={{ color: '#222', fontSize: '16px' }}>{item.title}</strong>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>
                    <span style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', marginRight: '5px', fontWeight: '500' }}>{item.category}</span>
                    <span>Use Case: {item.description}</span>
                  </div>
                </div>
                
                {/* Visual Actions Layout Pipeline wrapper */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ color: '#e53e3e', fontWeight: 'bold', fontSize: '18px' }}>₹{item.amount}</span>
                  
                  {/* Action core trigger mapping directly to the handleDelete method */}
                  <button 
                    onClick={() => handleDelete(item.id)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#e53e3e',
                      cursor: 'pointer',
                      fontSize: '16px',
                      padding: '5px 8px',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#fed7d7'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Global style definition layout object literal configuration
const styles = {
  formContainer: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    fontFamily: '"Segoe UI", Roboto, sans-serif'
  },
  formTitle: {
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: '20px',
    fontSize: '22px',
    fontWeight: '600'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#475569'
  },
  input: {
    padding: '10px',
    fontSize: '15px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    color: '#333333',
    outline: 'none'
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#4F46E5',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)'
  }
};

export default SpendForm;