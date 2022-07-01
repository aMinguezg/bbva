import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import './styles/login-style.scss';

const Login = ({ destination }) => {
  const navigate = useNavigate();
  const nameRef = useRef("");

  const navigateTo = function (e) {
    e.preventDefault();
    navigate(destination, { state: { name: nameRef.current.value } });
  };

  return (
    <form className="login-form" onSubmit={navigateTo}>
      <input
        ref={nameRef}
        id="inputName"
        type="text"
        required
        autoFocus
        placeholder="Name*"
      />
      <button type="submit">
        JOIN
      </button>
    </form>
  );
};

Login.propTypes = {
  destination: PropTypes.string.isRequired,
};

export default Login;
