import { useNavigate, useParams } from "react-router-dom";

const OrderPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Bonjour {name}</h1>
      <button onClick={handleOnClick}>Déconnexion</button>
    </div>
  );
};

export default OrderPage;
