import { ChangeEvent, FormEvent, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { authenticateUser } from "../../../api/user";
import { theme } from "../../../theme";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const LoginForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  // const { handleUsername } = useProductContext();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await authenticateUser(name);
    // await handleUsername(name);

    setName("");
    navigate(`/order/${name}`);
  };

  return (
    <LoginFormStyled action="" onSubmit={handleOnSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <div className="separator" />
      <h2>Connectez-vous</h2>
      <Input
        type="text"
        placeholder="Entrez votre prénom"
        required
        onChange={handleOnChange}
        value={name}
        name="name"
        Icon={<PiUserCircleFill />}
        $variant="primary"
      />
      <Button
        label="Accédez à mon espace"
        Icon={<MdKeyboardArrowRight />}
        $variant="primary"
        $size="full"
      />
    </LoginFormStyled>
  );
};

export default LoginForm;

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  width: 464px;
  gap: 18px;

  h1,
  h2 {
    font-family: "Amatic SC";
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }

  h1 {
    font-size: ${theme.fonts.size.P5};
    margin-bottom: 14px;
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    margin-top: 22px;
  }

  .separator {
    border-top: 2px solid #f56a2c;
    width: 100%;
  }
`;
