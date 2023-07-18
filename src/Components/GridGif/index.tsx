import { useCallback, useEffect, useState } from "react";
import { getGif } from "../../helpers/getGif";
import { Gif } from '../../interfaces/Gif.interfaces';

interface Props {
    category: string;
}

export const GridGif = ({ category }: Props) => {
    const [images, setImages] = useState<Gif[]>([]);

    const getImages = useCallback(
        async () => {
            const fetchImages = await getGif(category);
            setImages(fetchImages);
        },
        [category],
    )

    useEffect(() => {
        getImages();
    }, [getImages]);

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {images.map(({id, title}) => {
                    return (
                        <li key={id}>
                            {title}
                        </li>
                    );
                })}
            </ol>
        </>
    );
}
