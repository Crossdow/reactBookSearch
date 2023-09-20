import React from 'react';
import classes from "./BookInfoButton.module.scss";

interface BookInfoButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  active: boolean;
}

const BookInfoButton: React.FC<BookInfoButtonProps> = ({ onClick, active, children }) => {
  return (
    <div className={classes.myBookInfoButtonContainer}>
      <button onClick={onClick} className={`${classes.myBookInfoButton} ${active ? classes.active : ''}`}>{children}</button>
    </div>
  );
};

export default BookInfoButton;
