import PropTypes from "prop-types";

import { Box, CircularProgress } from "@mui/material";
import { withStyles } from "@mui/styles";

import MaterialCardDetail from "../../../../commonComponents/MaterialCardDetail";

import styles from "./styles";

const PokemonDetailsPageLayout = ({
  abilities,
  stats,
  info,
  isLoading,
  handleAddPokemonToCart,
  addPokemonToCart,
  isAddPokemonToCart,
  handleGoToCartPage,
  classes,
}) => {
  return (
    <Box>
      <h1 className={classes.detailTitle}>DETAILS</h1>
      <Box>
        {isLoading ? (
          <Box className={classes.progressArea}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Box className={classes.cardArea}>
              <MaterialCardDetail
                key={info.id}
                name={info.name}
                image={info.image}
                price={info.price}
                handleAddPokemonToCart={() =>
                  handleAddPokemonToCart(addPokemonToCart)
                }
                isAddPokemonToCart={isAddPokemonToCart}
                handleGoToCartPage={handleGoToCartPage}
              />
            </Box>
            <Box className={classes.wrapperInfo}>
              <h2>ABILITIES</h2>
              {abilities?.map(({ title, description }) => (
                <Box key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Box>
              ))}
              <h2>STATS</h2>
              {stats?.map(({ title, value }) => (
                <Box key={title}>
                  <p>
                    {title} : {value}
                  </p>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

PokemonDetailsPageLayout.propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  info: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  handleAddPokemonToCart: PropTypes.func.isRequired,
  addPokemonToCart: PropTypes.func.isRequired,
  isAddPokemonToCart: PropTypes.func.isRequired,
  handleGoToCartPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(PokemonDetailsPageLayout);
