import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['stewie Griffin']);

  return (
    <main>
      <header>
        <h2>Busca un GIF</h2>
        <AddCategory setCategories={setCategories} />
      </header>
      <section className='gifs-container'>
        <ol>
          {categories.map(category => <GifGrid key={category} category={category}/>)}
        </ol>
      </section>
    </main>
  )
};
export default GifExpertApp;