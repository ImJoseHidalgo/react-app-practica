export const getGifs = async( category ) => {
  const API = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=BYKsFzfenvLYOR9gbpPxcHDFvxTZ2C7W`;
  const resp = await fetch(API);
  const {data} = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      rating: img.rating,
      url: img.images?.downsized_medium.url
    }
  })
  return gifs;
}