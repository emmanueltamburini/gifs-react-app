import { Gif } from "../../../interfaces/Gif.interfaces"

interface Props {
    image: Gif
}

export const GridItem = ({image}: Props) => {
  return (
    <div className="card">
        <img src={image.url} alt={image.title} />
        <p>{image.title}</p>
    </div>
  )
}
