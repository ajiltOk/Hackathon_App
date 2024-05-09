import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        navigate("/home", { replace: false });
      })}
    >
      <Controller
        control={control}
        name="userName"
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(event) => field.onChange(event)}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <FormControl
            sx={{ ml: 2 }}
            variant="outlined"
            onChange={(event) => field.onChange(event)}
            value={field.value}
          >
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
        )}
      />
      <div className="loginButton">
        <Button
          type="submit"
          //onClick={() => navigate("/home", { replace: false })}
          sx={{ mt: "1rem", pl: 10, pr: 10 }}
          variant="contained"
        >
          LOGIN
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
