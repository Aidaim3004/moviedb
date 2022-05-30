import React from 'react';
import './Spinner.css'
import { SpinnerDotted } from 'spinners-react';

const Spinner = () => {
  return (
    <div className="spinner">
      <SpinnerDotted size={70} thickness={100} speed={100} color="rgb(2, 9, 152)" />
    </div>
  );
};

export default Spinner;