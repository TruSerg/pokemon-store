const styles = () => ({
  wrapper: {
    minWidth: "240px",
    minHeight: "200px",
    backgroundColor: "yellow",
    opacity: "0.7",

    "&:hover": {
      boxShadow: "4px 6px 5px rgba(0, 0, 0, 0.5)",
      color: "red",
      backgroundColor: "yellow",
      opacity: "1",
    },
  },
  image: {
    minHeight: "100px",

    "&:img": {
      display: "block",
    },
  },
  name: {},
  price: {},
});
export default styles;
