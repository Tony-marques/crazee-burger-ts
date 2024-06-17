import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

type UserProfilProps = {
  name?: string;
};

const UserProfil = ({name}: UserProfilProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/", { replace: true });
  };
  
  return (
    <div className="user">
      <div className="left">
        <p>
          Hey, <span>{name}</span>
        </p>
        <button onClick={handleOnClick}>Se déconnecter</button>
      </div>
      <div className="right">
        <PiUserCircleFill />
      </div>
    </div>
  );
};

export default UserProfil;
