import React from "react";
import { useLocation } from "react-router-dom";

const Success = (data) => {
  const location = useLocation();
  console.log(data);
  return <div>Success</div>;
};

export default Success;
