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
    <input 
      type='text'
      placeholder='Buscar Gif'
      value={inputValue}
      onChange={handleInpuChange}
    />
  </form>)
};
