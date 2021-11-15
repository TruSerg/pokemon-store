import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

import MaterialCard from "../../../../commonComponents/MaterialCard";

import styles from "./styles.module.scss";
import MaterialCardDetail from "../../../../commonComponents/MaterialCardDetail";

const PokemonDetailsPageLayout = ({ info, isLoading }) => {
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
          <div>
            <h2>ABILITIES</h2>
            {info.abilities?.map((ability) => (
              <div key={ability.title}>
                <h2>{ability.title}</h2>
                <p>{ability.description}</p>
              </div>
            ))}
            <h2>STATS</h2>
            {info.stats?.map((stat) => (
              <div key={stat.title}>
                <p>{`${stat.title} : ${stat.value}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsPageLayout;
