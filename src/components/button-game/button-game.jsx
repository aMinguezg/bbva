import React from "react";
import PropTypes from "prop-types";
import ButtonGame from "./model/button-game";

const ButtonGameComponent = ({buttonGame, getValue}) => {
  return <button onClick={() => getValue(buttonGame.type)}>{buttonGame.text}</button>;
};

ButtonGameComponent.propTypes = {
  buttonGame: PropTypes.instanceOf(ButtonGame).isRequired,
  getValue: PropTypes.func.isRequired,
};

export default ButtonGameComponent;
