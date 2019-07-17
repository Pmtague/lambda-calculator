import React from "react";
import '../ButtonStyles.scss';

const SpecialButton = (props) => {
  const {special} = props;
  return (
    <button className='specbutton'>
      {special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;