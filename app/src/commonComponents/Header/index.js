import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  ShoppingCartOutlined,
  PersonOutline,
  Logout,
  HowToReg,
  Login,
} from "@mui/icons-material";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";

import { Badge, Box, Container, IconButton } from "@mui/material";
import { withStyles } from "@mui/styles";

import { useLogout } from "../../hooks";

import { ROUTES } from "../../routes/routeNames";

import styles from "./styles";

const Header = ({ classes }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const { quantity } = useSelector((state) => state.cartPage);
  const handleLogout = useLogout();

  return (
    <Box className={classes.headerWrapper}>
      <Container>
        {isAuth ? (
          <Box className={classes.wrapperNav}>
            <Box>
              <Link to={ROUTES.POKEMONS_PAGE}>
                <IconButton color="success">
                  <SettingsBackupRestoreRoundedIcon />
                </IconButton>
              </Link>
            </Box>
            <Box className={classes.wrapperLink}>
              <Link to={ROUTES.CART_PAGE}>
                <IconButton color="success">
                  <Badge badgeContent={quantity} color="error">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </Link>
              <Link to={ROUTES.USER_PAGE}>
                <IconButton color="success">
                  <PersonOutline />
                </IconButton>
              </Link>
              <IconButton color="success" onClick={handleLogout}>
                <Logout />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box className={classes.wrapperLogin}>
            <Link to={ROUTES.LOGIN}>
              <IconButton color="success">
                <Login />
              </IconButton>
            </Link>

            <Link to={ROUTES.REGISTRATION}>
              <IconButton color="success">
                <HowToReg />
              </IconButton>
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default withStyles(styles)(Header);
