import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ playerName }) => {
  const navigate = useNavigate();

  const goBack = function () {
    navigate(-1);
  };
  return (
    <header>
      <p>Hi {playerName}</p>
      <button onClick={goBack}>exit</button>
    </header>
  );
};

export default Header;
