import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Button,
  Tooltip,
  Menu,
  Avatar,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

import SearchInput from "../Search/Search";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [loginUser, setLoginUser] = useState(false);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  function LoginUser() {
    navigate("/login", { replace: false });
    setLoginUser(true);
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            onClick={() => navigate("/home", { replace: false })}
            component="button"
            color="inherit"
            underline="none"
            sx={{ flexGrow: 1, display: "inline-flex" }}
          >
            {"КиноСкрыт"}
          </Link>
          <SearchInput />
          {!loginUser && (
            <Button onClick={LoginUser} color="inherit">
              Login
            </Button>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
