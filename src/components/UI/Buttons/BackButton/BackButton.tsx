import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  link: string;
}

const BackButton: React.FC<BackButtonProps> = ({ link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <button onClick={handleClick}>Back</button>
  );
};

export default BackButton;