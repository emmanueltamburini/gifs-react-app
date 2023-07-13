import { useState } from "react";
import AddCategory from "./Components/AddCategory";

const GifApp = () => {
  const [categories, setCategories] = useState<string[]>(['One Punch', 'Dragon ball']);

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

        <ol>
            {categories.map(element => <li key={element}>{element}</li>)}
        </ol>
    </>
  )
}

export default GifApp