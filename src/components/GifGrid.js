import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);
    
  return (<>
    <h3 className='animate__animated animate__fadeIn'>{category}</h3>
    {loading && <h3 className='animate__animated animate__flash'>Loading Pa!</h3>}
    <div className='cards-container'>
      {data.map(img => <GifGridItem key={img.id} {...img} />)}
    </div>
  </>)
}
