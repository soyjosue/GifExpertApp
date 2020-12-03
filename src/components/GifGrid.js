import React, { useState, useEffect } from 'react'

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs()
  }, [])

  const getGifs = async () => {

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=JRhaOyzbHhah2RAY8vNwpdh1gHG8Bubm&q=Rick&Limit=10'
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    // console.log(gifs);
    setImages( gifs );

  }

  return (
    <>
      <h2> {category} </h2>
      <div className="card-grid">
        {
          images.map( (img) => (
            <GifGridItem 
              key={img.id}
              { ...img }
            />
          ))
        }
      </div>
    </>
  );
}

export default GifGrid;