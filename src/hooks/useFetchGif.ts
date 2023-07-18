
import { useCallback, useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
import { Gif } from "../interfaces/Gif.interfaces";

export const useFetchGif = (category: string) => {
    const [images, setImages] = useState<Gif[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = useCallback(
        async () => {
            const fetchImages = await getGif(category);
            setImages(fetchImages);
            setIsLoading(false);
        },
        [category],
    )

    useEffect(() => {
        getImages();
    }, [getImages]);

  return {images, isLoading};
}
