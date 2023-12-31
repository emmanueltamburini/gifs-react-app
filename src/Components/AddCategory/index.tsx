import { useState } from "react";

interface Props {
  onAdd: (value: string) => void
}

export const AddCategory = ({ onAdd }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
          type="text"
          placeholder="Search gif"
          value={inputValue}
          onChange={onInputChange}
      />
    </form>
  )
}
