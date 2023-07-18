import { useFetchGif } from "../../hooks/useFetchGif";
import { GridItem } from "./GridItem/GridItem";

interface Props {
    category: string;
}

export const GridGif = ({ category }: Props) => {
    const {images, isLoading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(image => {
                    return (
                        <GridItem key={image.id} image={image} />
                    );
                })}
            </div>
        </>
    );
}
