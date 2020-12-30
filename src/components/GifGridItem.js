import React from 'react'

export const GifGridItem = ({ title, url, rating }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <h3>Title: {title}</h3>
      <h3>Rating: {rating}</h3>
      <img src={url} alt={title} />
    </div>
  )
}
