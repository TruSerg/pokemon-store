import { useState, useCallback } from "react";
import { ROUTES } from "../routes/routeNames";

const useSnackBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  return { open, handleOpen, handleClose };
};

export default useSnackBar;
