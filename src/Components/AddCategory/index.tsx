import { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
          type="text"
          placeholder="Search gif"
          value={inputValue}
          onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory;