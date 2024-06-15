import { ChangeEvent, FormEvent, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../../theme";

const LoginForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    setName("");
    navigate(`/order/${name}`);
  };

  return (
    <LoginFormStyled action="" onSubmit={handleOnSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <div className="separator" />
      <h2>Connectez-vous</h2>
      <div className="input-group">
        <PiUserCircleFill />
        <input
          type="text"
          placeholder="Entrez votre prénom"
          required
          onChange={handleOnChange}
          value={name}
          name="name"
        />
      </div>
      <button type="submit">
        <span>Accédez à mon espace</span>
        <MdKeyboardArrowRight />
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 40px 32px; */
  width: 464px;
  gap: 18px;

  h1,
  h2 {
    font-family: "Amatic SC";
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }

  h1 {
    font-size: ${theme.fonts.P5};
    margin-bottom: 14px;
  }

  h2 {
    font-size: ${theme.fonts.P4};
    margin-top: 22px;
  }

  .separator {
    border-top: 2px solid #f56a2c;
    width: 100%;
  }

  .input-group {
    padding: 19px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.white};

    input {
      flex: 1;
      max-width: 320px;
      font-family: arial;
      font-weight: 400;
      border: none;
      outline: none;

      &::placeholder {
        color: #d3d3d3;
      }
    }

    svg {
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #747b91;
    }
  }

  button {
    width: 100%;
    padding: 18px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary_burger};
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: ${theme.borderRadius.round};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.primary};
    }

    &:hover span {
      color: ${theme.colors.primary};
    }

    span {
      color: ${theme.colors.white};
      font-weight: 700;
      font-family: Arial, Helvetica, sans-serif;
      transition: color 0.3s;
    }

    svg {
      font-size: 15px;
      color: ${theme.colors.white};
    }
  }
`;
