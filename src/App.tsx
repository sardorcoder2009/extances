import React, { useState } from 'react';
import Colleg from './Collage'; 
const App: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');


  const [expenses, setExpenses] = useState([
    { id: 0, description: 'aaa', amount: 5, category: 'Utilities' },
    { id: 1, description: 'bbb', amount: 10, category: 'Entertainment' },
    { id: 2, description: 'ccc', amount: 3, category: 'Groceries' },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Expenses Tracker</h1>

      <div>
        <button onClick={() => handleCategoryChange('Utilities')}>Utilities</button>
        <button onClick={() => handleCategoryChange('Entertainment')}>Entertainment</button>
        <button onClick={() => handleCategoryChange('Groceries')}>Groceries</button>
        <button onClick={() => handleCategoryChange('')}>All</button>
      </div>

      <Colleg selectedCategory={selectedCategory} expenses={filteredExpenses} />
    </div>
  );
};

export default App;
