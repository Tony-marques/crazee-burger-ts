import { ChangeEvent, FormEvent, useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`bonjour ${name}`);
    setName("");
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="" onSubmit={handleOnSubmit}>
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
      
    </div>
  );
};

export default LoginPage;
