import React from "react";
import PropTypes from "prop-types";
import ButtonGame from "./model/button-game";
import './style/button-style.scss';

const ButtonGameComponent = ({ buttonGame, getValue }) => {
  return (
    <button onClick={() => getValue(buttonGame.type)} className='btn-game'>
      <i className={buttonGame.icon}></i>
    </button>
  );
};

ButtonGameComponent.propTypes = {
  buttonGame: PropTypes.instanceOf(ButtonGame).isRequired,
  getValue: PropTypes.func.isRequired,
};

export default ButtonGameComponent;
