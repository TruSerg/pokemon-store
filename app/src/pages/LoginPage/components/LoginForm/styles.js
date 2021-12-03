const styles = () => ({
  progressArea: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
  },

  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "75vh",
    backgroundColor: "red",
  },

  formArea: {
    border: "1px solid gray",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#e8e2e2",
  },

  form: {
    marginBottom: "20px",
  },

  input: {
    marginBottom: "20px",
  },

  button: {
    textAlign: "center",
    marginBottom: "20px",

    "&:last-child": {
      marginBottom: "0",
    },
  },

  btn: {
    minWidth: "100px",
  },
});

export default styles;
