import React from 'react';
import classes from "./BookSearchInput.module.scss";

interface BookSearchInputProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
}

const BookSearchInput: React.FC<BookSearchInputProps> = ({ query, setQuery, handleSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      handleSearch();
    }
  }

  return (
    <div className={classes.myInputWrapper}>
      <input
        className={classes.myBookSearchInput}
        type="text"
        value={query}
        onChange={handleChange}
        onKeyUp={handlePressEnter}
        placeholder={"Search for books..."}
      />
    </div>
  );
};

export default BookSearchInput;