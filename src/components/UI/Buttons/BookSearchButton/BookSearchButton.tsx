import React from 'react';
import classes from './BookSearchButton.module.scss'

interface BookSearchButtonProps {
  handleSearch: () => void;
}

const BookSearchButton: React.FC<BookSearchButtonProps> = ({ handleSearch }) => {
  return (
    <button onClick={handleSearch} className={classes.myBookSearchButton}>
      Search
    </button>
  );
};

export default BookSearchButton;