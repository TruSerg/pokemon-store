import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

import MaterialCard from "../../../../commonComponents/MaterialCard";

import styles from "./styles.module.scss";
import MaterialCardDetail from "../../../../commonComponents/MaterialCardDetail";

const PokemonDetailsPageLayout = ({ info, isLoading, stats }) => {
  return (
    <div>
      <h1 className={styles.detailTitle}>DETAILS</h1>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardArea}>
          <MaterialCardDetail
            key={info.id}
            name={info.name}
            image={info.image}
            price={info.price}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsPageLayout;
