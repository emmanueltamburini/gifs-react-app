import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import { GridGif } from "./Components/GridGif";

const GifApp = () => {
  const [categories, setCategories] = useState<string[]>(['Dragon ball']);

  const onAddCategory = (value: string) => {
    if (value.trim() === '' || categories.includes(value)) {
        return;
    }

    setCategories(state => [value, ...state]);
  }

  return (
    <>
        <h1>GifApp</h1>
        <AddCategory onAdd={onAddCategory}/>
        {categories.map(element => <GridGif key={element} category={element}/>)}
    </>
  )
}

export default GifApp