import PropTypes from "prop-types";

import styles from "./styles.module.scss";
import MaterialCardDetail from "../../../../commonComponents/MaterialCardDetail";
import CustomCircularProgress from "../../../../commonComponents/CircularProgress";
import List from "../../../../commonComponents/List";

const PokemonDetailsPageLayout = ({
  abilitiesArray,
  statsArray,
  info,
  isLoading,
  handleAddPokemonToCart,
  pokemon,
}) => {
  return (
    <div>
      <h1 className={styles.detailTitle}>DETAILS</h1>
      <div>
        {isLoading ? (
          <CustomCircularProgress />
        ) : (
          <div className={styles.cardArea}>
            <MaterialCardDetail
              key={info.id}
              name={info.name}
              image={info.image}
              price={info.price}
              handleAddPokemonToCart={handleAddPokemonToCart}
            />
            <div>
              <h2>ABILITIES</h2>
              {abilitiesArray?.map(({ title, description }) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
              <h2>STATS</h2>
              {statsArray?.map(({ title, value }) => (
                <div key={title}>
                  <p>
                    {title} : {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailsPageLayout;
