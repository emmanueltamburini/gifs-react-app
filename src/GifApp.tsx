import { useState } from "react";

const GifApp = () => {
  const [categories, setCategories] = useState<string[]>(['One Punch', 'Dragon ball']);

  const onAddCategory = () => {
    setCategories(state => ["Demon Slayer", ...state]);
  }

  return (
    <>
        <h1>GifApp</h1>
        <button onClick={onAddCategory}>Add</button>

        <ol>
            {categories.map(element => <li key={element}>{element}</li>)}
        </ol>
    </>
  )
}

export default GifApp