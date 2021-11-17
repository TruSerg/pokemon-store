import { CircularProgress } from "@mui/material";

import styles from "../CircularProgress/styles.module.scss";
const CustomCircularProgress = () => {
  return (
    <div className={styles.progressArea}>
      <CircularProgress />
    </div>
  );
};

export default CustomCircularProgress;
