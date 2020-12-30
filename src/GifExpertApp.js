import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['stewie Griffin']);

  return (
    <main>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(category => <GifGrid key={category} category={category}/>)}
      </ol>
    </main>
  )
};
export default GifExpertApp;