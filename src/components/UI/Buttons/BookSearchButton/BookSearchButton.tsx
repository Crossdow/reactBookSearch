import React from 'react';
import classes from './BookSearchButton.module.scss'
import {useNavigate} from "react-router-dom";

interface BookSearchButtonProps {
  handleSearch: () => void;
}

const BookSearchButton: React.FC<BookSearchButtonProps> = ({ handleSearch }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    handleSearch()
  };

  return (
    <button onClick={handleClick} className={classes.myBookSearchButton}>
      Search
    </button>
  );
};

export default BookSearchButton;