import { Link } from "react-router-dom";
import ApiService from "../service/ApiService";

import Nav from "react-bootstrap/Nav";

const logout = () => {
  ApiService.logout();
};

export const Sidebar = () => {
  const isAuth = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();

  return (
    <div className="sidebar">
      <h1 className="ims">IMS</h1>
      <ul className="nav-links">
        {isAuth && (
          <li>
              <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <Link to="/transaction">Transactions</Link>
          </li>
        )}

        {isAdmin && (
          <li>
            <Link to="/category">Category</Link>
          </li>
        )}

        {isAdmin && (
          <li>
            <Link to="/product">Product</Link>
          </li>
        )}

        {isAdmin && (
          <li>
            <Link to="/supplier">Supplier</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link to="/purchase">Purchase</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link to="/sell">PurcSellhase</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
