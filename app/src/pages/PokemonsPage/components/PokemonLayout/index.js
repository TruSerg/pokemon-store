import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

import MaterialCard from "../../../../commonComponents/MaterialCard";

const PokemonPageLayout = ({ list, isLoading, handleGoToDetails }) => {
  return (
    <div>
      <h1>Pokemons</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {list.map(({ name, url }) => (
            <MaterialCard
              key={url}
              name={name}
              handleGoToDetails={() => handleGoToDetails(name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

PokemonPageLayout.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default PokemonPageLayout;
