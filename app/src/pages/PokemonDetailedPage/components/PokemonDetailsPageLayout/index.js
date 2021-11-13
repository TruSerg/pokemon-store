import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

const PokemonDetailsPageLayout = ({ info, isLoading }) => {
  return (
    <div>
      <h1>DETAILS</h1>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {info.name} - {info.base_experience}
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsPageLayout;
