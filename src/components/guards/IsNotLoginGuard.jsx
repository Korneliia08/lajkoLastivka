import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function IsNotLoginGuard(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRefreshToken = localStorage.getItem("refresh_token");
    console.log(storedToken, storedRefreshToken);
    if (storedToken !== null || storedRefreshToken !== null) {
      navigate("./admin");
    }
  }, []);

  return <>{props.children}</>;
}

export default IsNotLoginGuard;
