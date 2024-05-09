import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import LoginForm from "../../../components/Login Form/LoginForm";
import "./LoginPage.scss";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="loginPage">
        <h1>Login</h1>
        <LoginForm />
        <Link
          onClick={() => navigate("/register", { replace: false })}
          component="button"
          sx={{ mt: "1rem" }}
          underline="always"
        >
          {"Register"}
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
