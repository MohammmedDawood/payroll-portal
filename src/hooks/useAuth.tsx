import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Adjust import based on your Redux setup

export const useAuth = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return { isAuthenticated };
};
