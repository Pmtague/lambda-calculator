import React, { useState } from "react";

const Display = (props) => {
  const { number } = props;
  return <div>{ number }</div>;
};

export default Display;