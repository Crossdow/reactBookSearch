import React from 'react';

interface BookSearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const BookSearchInput: React.FC<BookSearchInputProps> = ({ query, setQuery, handleSearch }) => {
  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyUp={handlePressEnter}
    />
  );
};

export default BookSearchInput;