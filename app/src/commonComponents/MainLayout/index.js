import { withStyles } from "@mui/styles";

import Header from "../Header";

import styles from "./styles";
import { Box, Container } from "@mui/material";

const MainLayout = ({ children, classes }) => {
  return (
    <Box className={classes.wrapper}>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};

export default withStyles(styles)(MainLayout);
