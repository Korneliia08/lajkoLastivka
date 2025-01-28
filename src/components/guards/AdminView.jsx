import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AdminViewGuard(props) {
  function exit() {
    toast.error("Брак доступу!");
    navigate("/");
  }

  function checkToken() {
    const storedToken = localStorage.getItem("token");
    const storedRefreshToken = localStorage.getItem("refresh_token");
    console.log(storedToken, storedRefreshToken);
    if (storedToken == undefined || storedRefreshToken == undefined) {
      exit();
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkToken();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    checkToken();
  }, [navigate]);

  return <>{props.children}</>;
}

export default AdminViewGuard;
