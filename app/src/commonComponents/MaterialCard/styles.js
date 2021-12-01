const styles = () => ({
  wrapper: {
    minWidth: "192px",
    minHeight: "430px",
    background: "red",
    display: "flex",
    flexDirection: "column",
    transition: "all easy 0.9s",
    border: "1px solid gray",

    "&:hover": {
      transition: "all easy 0.5s",
      boxShadow: "4px 6px 5px rgba(0, 0, 0, 0.5)",
      color: "red",
      backgroundColor: "yellow",
    },
  },

  image: {
    height: "180px",

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
    textAlign: "center",
    width: "150px",
    backgroundColor: "purple[500]",
    "&:hover": {
      backgroundColor: "purple[700]",
    },
  },
});
export default styles;
