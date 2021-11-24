import Header from "../Header";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div className={styles.mainLayoutBackground}>{children}</div>
  </div>
);

export default MainLayout;
