import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  ShoppingCartOutlined,
  PersonOutline,
  Logout,
  KeyboardBackspaceOutlined,
  HowToReg,
  Login,
} from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";

import { useLogout } from "../../hooks";

import { ROUTES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const { quantity } = useSelector((state) => state.cartPage);
  const handleLogout = useLogout();

  return (
    <div className={styles.wrapper}>
      {isAuth ? (
        <div className={styles.wrapperNav}>
          <div>
            <Link to={ROUTES.POKEMONS_PAGE}>
              <IconButton>
                <KeyboardBackspaceOutlined />
              </IconButton>
            </Link>
          </div>
          <div className={styles.wrapperLink}>
            <Link to={ROUTES.CART_PAGE}>
              <IconButton>
                <Badge badgeContent={quantity} color="success">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Link>
            <Link to={ROUTES.USER_PAGE}>
              <IconButton>
                <PersonOutline />
              </IconButton>
            </Link>
            <IconButton onClick={handleLogout}>
              <Logout />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className={styles.wrapperLogin}>
          <Link to={ROUTES.LOGIN}>
            <IconButton>
              <Login />
            </IconButton>
          </Link>

          <Link to={ROUTES.REGISTRATION}>
            <IconButton>
              <HowToReg />
            </IconButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
