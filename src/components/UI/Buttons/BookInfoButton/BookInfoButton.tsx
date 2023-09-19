import React from 'react';

interface BookInfoButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BookInfoButton: React.FC<BookInfoButtonProps> = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default BookInfoButton;
