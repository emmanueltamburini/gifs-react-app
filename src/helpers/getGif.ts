import { Datum } from "../interfaces/Gif.interfaces";

export const getGif = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oRmo6QL8Cr9DBqfnuGFGAURdkqfnqnPf&q=${category}&limit=20`;
    
    const response = await fetch(url);
    const {data} = await response.json();
    const gif = data.map((img: Datum) => ({
        id: img.id,
        title: img.title,
        url:  img.images.downsized_medium.url
    }));

    console.log('=== index.tsx [18] ===', gif);
  }