const styles = () => ({
  cardWrapper: {
    minWidth: "188px",
    minHeight: "435px",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.9s easy",
    border: "1px solid gray",

    "&:hover": {
      boxShadow: "4px 6px 5px rgba(0, 0, 0, 0.5)",
      color: "red",
      backgroundColor: "yellow",
    },
  },

  image: {
    height: "180px",
    cursor: "pointer",

    "&:img": {
      display: "block",
      maxWidth: "100%",
      height: "auto",
      objectFit: "cover",
    },
  },

  cardContent: {
    maxWidth: "180px",
    flex: "1 1 auto",
  },

  name: {
    fontSize: "50px",
  },

  price: {},

  btn: {
    width: "150px",
  },
});
export default styles;
