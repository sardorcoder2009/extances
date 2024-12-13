import { FormEvent, useState } from "react";

function Out() {

  const [selectedCategory, setSelectedCategory] = useState('');


const [expenses, setExpenses] = useState([
   {id: 0, description: 'aaa', amount: 5, category: 'Utilities'},
   {id: 1, description: 'bbb', amount: 10, category: 'Entertainment'},
   {id: 2, description: 'ccc', amount: 3, category: 'Groceries'}
 ]);

return(
  <>
  <div>duewdh</div>
  </>
) 
}

export  default Out;