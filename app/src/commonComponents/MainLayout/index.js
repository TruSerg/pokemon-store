import { withStyles } from "@mui/styles";

import Header from "../Header";

import styles from "./styles";

const MainLayout = ({ children, classes }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default withStyles(styles)(MainLayout);
