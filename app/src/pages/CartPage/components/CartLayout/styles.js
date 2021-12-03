const styles = () => ({
  cartWrapper: {
    padding: "30px 0 50px 0",
  },

  orderTitle: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
  },

  cardsArea: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 -10px",
    marginBottom: "20px",
  },

  cardsWrapper: {
    padding: "0 10px",
  },

  name: {
    marginBottom: "20px",
  },

  card: {
    minWidth: "153px",
    textAlign: "center",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
    marginBottom: "20px",
    boxShadow: "4px 5px 4px rgba(0, 0, 0, 0.5)",
  },

  cardImage: {
    cursor: "pointer",
  },

  cardBtn: {
    minWidth: "26px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 1)",

    "&:first-child": {
      marginRight: "10px",
    },

    "&:active": {
      top: "3px",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 1)",
    },
  },

  cardDisplay: {
    display: "inline-block",
    minWidth: "27px",
    borderRadius: "2px",
    border: "1px solid #000",
    marginRight: "10px",
    minHeight: "27px",
  },

  buttons: {
    marginBottom: "20px",
  },

  cardButtons: {
    marginBottom: "20px",
  },

  cardButton: {
    boxShadow: "3px 3px 2px rgba(0, 0, 0, 1)",

    "&:active": {
      top: "2px",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 1)",
    },
  },

  confirmArea: {
    textAlign: "center",
  },

  confirmTitle: {
    marginBottom: "20px",
  },

  confirmItem: {
    marginRight: "20px",
  },

  orderWrapper: {
    display: "flex",
    maxWidth: "20px",
  },
});

export default styles;
