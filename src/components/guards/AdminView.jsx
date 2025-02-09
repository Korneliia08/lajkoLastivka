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
    if (storedToken == undefined || storedRefreshToken == undefined) {
      exit();
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkToken();
      //todo to na mniej jak się zabezpieczy lepiej
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    checkToken();
  }, [navigate]);

  return <>{props.children}</>;
}

export default AdminViewGuard;
