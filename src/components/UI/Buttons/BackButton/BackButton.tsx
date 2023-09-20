import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "./BackButton.module.scss";

interface BackButtonProps {
  link: string;
}

const BackButton: React.FC<BackButtonProps> = ({ link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <button onClick={handleClick} className={classes.myBackButton}>
      <span className={classes.myBackButton__arrow}></span>
      <span className={classes.myBackButton__text}>Back</span>
    </button>
  );
};

export default BackButton;