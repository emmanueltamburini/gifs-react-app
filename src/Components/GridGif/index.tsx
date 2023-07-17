import { useEffect } from "react";
import { getGif } from "../../helpers/getGif";

interface Props {
    category: string;
}

export const GridGif = ({category}:Props) => {
  useEffect(() => {
    getGif(category);
  }, [category]);

  return (
    <>
        <h3>{category}</h3>
    </>
  );
}
