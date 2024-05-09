import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Backbutton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <BsArrowLeftCircle onClick={handleBack} />
    </div>
  );
};

export default Backbutton;
