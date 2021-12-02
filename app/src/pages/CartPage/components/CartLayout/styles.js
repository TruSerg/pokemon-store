const styles = () => ({
  orderTitle: {
    textAlign: "center",
  },

  cardsArea: {
    display: "flex",
    flexWrap: "wrap",
  },

  cardsOrder: {
    minWidth: "140px",
    textAlign: "center",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
    marginBottom: "20px",
    boxShadow: "4px 5px 4px rgba(0, 0, 0, 0.5)",
  },

  cardBtn: {
    minWidth: "26px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 1)",

    "&:first-child": {
      marginRight: "10px",
    },
  },

  cardDisplay: {
    display: "inline-block",
    minWidth: "25px",
    borderRadius: "2px",
    border: "1px solid #000",
    marginRight: "10px",
    minHeight: "24px",
  },

  buttons: {
    marginBottom: "20px",
  },

  cardButton: {
    margin: "20px 0 20px 0",
    boxShadow: "3px 3px 2px rgba(0, 0, 0, 1)",

    "&:active": {
      top: "2px",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 1)",
    },
  },

  confirmArea: {
    textAlign: "center",
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
