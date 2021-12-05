const styles = () => ({
  pokemonsWrapper: {
    padding: "50px 0 50px 0",
    background: "linear-gradient(155deg,#0865d5,#07df24,#e6ab12)",
  },

  orderTitle: { textAlign: "center", fontSize: "30px", marginBottom: "30px" },

  cardsArea: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "100vh",
    margin: "0 -10px",
    marginBottom: "20px",
  },

  card: {
    padding: "0 10px",
    marginBottom: "20px",
  },

  progressArea: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
  },

  paginationArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50px",
  },
});

export default styles;
