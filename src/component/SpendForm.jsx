import React, { useState } from 'react';

const SpendForm = () => {
  // Form ke inputs ka state manage karne ke liye
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, amount, category, description });
    alert(`Expense Added Successfully!`);

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: amount,
      category: category,
      description: description
    };
    setExpenses([...expenses, newExpense]);

    setTitle('');
    setAmount('');
    setCategory('Food');
    setDescription('');
  };

  // Inline styles object
  const styles = {
    formContainer: {
      maxWidth: '500px',
      margin: '30px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    formTitle: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333'
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
      fontWeight: '600',
      color: '#555',
      fontSize: '14px'
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #cccccc',
      fontSize: '16px',
      outline: 'none',
      backgroundColor:'#ffffff',
      color: '#333333'
    },
    button: {
      padding: '12px',
      backgroundColor: '#4F46E5',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Add New Expense</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* 1. Title Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Where did you spend? *</label>
          <input
            type="text"
            placeholder="e.g., Chai-Nashta, Room Rent"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* 2. Amount Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Amount (₹) *</label>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* 3. Category Dropdown */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Category *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
          >
            <option value="Food">Food & Drinks</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills & Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* 4. Description Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Notes / Description (Optional)</label>
          <textarea
            placeholder="Add more details about this expense..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ ...styles.input, height: '80px', resize: 'none' }}
          />
        </div>

        <button type="submit" style={styles.button}>Add Expense</button>
      </form>

      {/* --- Expenses List Section --- */}
      <div style={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '15px', color: '#333', borderBottom: '2px solid #f4f6f9', paddingBottom: '5px' }}>📊 All Expenses</h3>
        
        {expenses.length === 0 ? (
          <p style={{ color: '#9a2323', textAlign: 'center' }}>No expenses added yet!</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {expenses.map((item) => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                <div>
                  <strong style={{ color: '#222', fontSize: '16px' }}>{item.title}</strong>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>
                    <span style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', marginRight: '5px' }}>{item.category}</span>
                    {item.description}
                  </div>
                </div>
                <span style={{ color: '#e53e3e', fontWeight: 'bold', fontSize: '18px' }}>₹{item.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SpendForm;