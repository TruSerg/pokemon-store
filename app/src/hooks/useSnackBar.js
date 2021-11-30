import { useState, useCallback } from "react";

const useSnackBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  return { isOpen, handleOpen, handleClose };
};

export default useSnackBar;
