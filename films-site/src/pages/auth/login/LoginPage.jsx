import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./LoginPage.scss";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="loginPage">
        <h1>Login</h1>
        <div>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <FormControl sx={{ ml: 2 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <Link
          onClick={() => navigate("/register", { replace: false })}
          component="button"
          sx={{ mt: "1rem" }}
          underline="always"
        >
          {"Register"}
        </Link>
        <Button
          onClick={() => navigate("/home", { replace: false })}
          sx={{ mt: "1rem", pl: 10, pr: 10 }}
          variant="contained"
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
