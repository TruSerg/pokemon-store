import { useCallback } from "react";

const useLogout = () => {
  return useCallback(() => {
    localStorage.clear();
    window.location.reload();
  }, []);
};

export default useLogout;
