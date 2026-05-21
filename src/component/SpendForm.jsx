import React, { useState } from 'react';

const SpendForm = () => {
  // Form ke inputs ka state manage karne ke liye
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, amount, category, description });
    alert(`Expence Added Sucessfully!\n\nDetails: ₹${amount} spent on "${title}".`);
    
    setTitle('');
    setAmount('');
    setCategory('Food');
    setDescription('');
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}> Add New Expense</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* 1. Title Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Where did you spend? *</label>
          <input 
            type="text" 
            placeholder="e.g., Chai-Nashta, Room Rent" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
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
            required
            style={styles.input}
          />
        </div>

        {/* 3. Category Dropdown */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Category *</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.select}
          >
            <option value="Food"> Food & Drinks</option>
            <option value="Travel"> Travel / Commute</option>
            <option value="Bills"> Bills & Utilities</option>
            <option value="Entertainment"> Entertainment</option>
            <option value="Other"> Other</option>
          </select>
        </div>

        {/* 4. Description Textarea */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Notes / Description (Optional)</label>
          <textarea 
            placeholder="Add more details about this expense..." 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            style={styles.textarea}
          />
        </div>

        {/* 5. Submit Button */}
        <button type="submit" style={styles.button}>
          Add Expense
        </button>
      </form>
    </div>
  );
};


const styles = {
  formContainer: {
    maxWidth: '450px',
    margin: '30px auto',
    padding: '25px',
    borderRadius: '12px',
    backgroundColor: '#c6d0b5',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  formTitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '24px'
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
    fontWeight: '600',
    color: '#555'
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '15px',
    outline: 'none',
    backgroundColor:  '#ffffff', 
    color: '#333333'
  },
  select: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '15px',
    backgroundColor: '#ffffff',
    color: '#333333'
  },
  textarea: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '15px',
    resize: 'none',
    backgroundColor:'#ffffff',
    color: '#333333'
  },
  button: {
    padding: '12px',
    backgroundColor: '#4c98ea',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.2s'
  }
};

export default SpendForm;