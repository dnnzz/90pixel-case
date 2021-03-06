import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {useLocation , Navigate } from 'react-router-dom';
export default function RequireAuth({ children }) {
    let { user } = useContext(UserContext);
    let location = useLocation();
    if (!user.auth) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return children;
  }