import { useState } from "react";

const Search = ({ onSearch, onReset }: any) => {
  const [value, setValue] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    onSearch(value);
  };

  const resetHandler = (e: any) => {
    e.preventDefault();
    setValue("");
    onReset();
  };

  return (
    <form>
      <input
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={submitHandler} type="submit">
        Search
      </button>
      <button onClick={resetHandler}>Reset</button>
    </form>
  );
};

export default Search;
