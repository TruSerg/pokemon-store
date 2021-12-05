const styles = () => ({
  cardWrapper: {
    minWidth: "188px",
    minHeight: "435px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray",
    transition: "0.4s",

    "&:hover": {
      boxShadow: "4px 6px 5px rgba(0, 0, 0, 0.7)",
      color: "#FF0000",
      backgroundColor: "#7FFFD4",
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

  btn: {
    width: "150px",
  },
});
export default styles;
