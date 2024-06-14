import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={handleOnClick}>Router à la page d'accueil</button>
    </div>
  );
};

export default ErrorPage;
