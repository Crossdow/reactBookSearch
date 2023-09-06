import React from 'react';
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerTitle}>
        Search books
      </h1>
    </div>
  );
};

export default Header;