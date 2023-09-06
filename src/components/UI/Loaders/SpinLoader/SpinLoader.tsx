import React from 'react';
import classes from "./SpinLoader.module.scss";

const SpinLoader = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.loadingSpinner}>
      </div>
    </div>
  );
};

export default SpinLoader;