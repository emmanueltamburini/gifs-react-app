import { getGif } from "../../helpers/getGif";

interface Props {
    category: string;
}

export const GridGif = ({category}:Props) => {
  getGif(category);

  return (
    <>
        <h3>{category}</h3>
    </>
  );
}
