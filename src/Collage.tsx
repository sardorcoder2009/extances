  import React from 'react';

interface CollegProps {
  selectedCategory: string;
  expenses: { id: number; description: string; amount: number; category: string }[];
}

const Colleg: React.FC<CollegProps> = ({ selectedCategory, expenses }) => {
  return (
    <div>
      <h2>Expenses List</h2>
      <p>Selected Category: {selectedCategory || 'All'}</p>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colleg;  