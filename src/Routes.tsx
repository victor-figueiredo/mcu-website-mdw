// import { useContext } from "react";
// import { AuthContext } from "./context/auth";
import { Routes as Router, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AppContextProvider } from "./context/AppContext";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppContextProvider>
      <Outlet />
    </AppContextProvider>
  );
};

const Routes = () => {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Router>
  );
};

export default Routes;
