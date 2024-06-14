import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form action="" onSubmit={handleOnSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        required
        onChange={handleOnChange}
        value={name}
        name="name"
      />
      <button type="submit">Accédez à votre espace</button>
    </form>
  );
};

export default LoginForm;
