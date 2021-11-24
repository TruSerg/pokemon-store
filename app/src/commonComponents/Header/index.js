import NavBar from "../NavBar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Link } from "@mui/material";

import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

const Header = () => {
  const { quantity } = useSelector((state) => state.cartPage);
  return (
    <div className={styles.header}>
      <div>
        <NavBar />
      </div>
      <div className={styles.headerCart}>
        <Badge badgeContent={quantity} color="success">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
