import React from 'react';

interface BookSearchButtonProps {
  handleSearch: () => void;
}

const BookSearchButton: React.FC<BookSearchButtonProps> = ({ handleSearch }) => {
  return (
    <button onClick={handleSearch}>
      Search
    </button>
  );
};

export default BookSearchButton;