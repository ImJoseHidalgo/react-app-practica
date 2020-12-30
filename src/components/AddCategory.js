import React, { useState }from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInpuChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2 ){
      setCategories(categ => [inputValue, ...categ]);
      setInputValue('');
    }
  }

  return (
  <form onSubmit={handleSubmit}>
    <h2>Add Category: {inputValue}</h2>
    <input 
      type='text'
      placeholder='Add Category'
      value={inputValue}
      onChange={handleInpuChange}
    />
  </form>)
};
