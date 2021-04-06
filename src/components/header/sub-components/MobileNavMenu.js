import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
const MobileNavMenu = () => {
  // const dispatch = useDispatch();
  const {authenticated} = useSelector((state) => state.auth);
  return (
    <nav className="offcanvasNavigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>
        {authenticated && (
          <li>
            <Link to={process.env.PUBLIC_URL + "/dashboard/dashboard"}>Dashboard</Link>
          </li>
        )}
        {/* <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/service"}>Service</Link>
          <ul className="subMenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/service"}>Service Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-details"}>
                Service Details
              </Link>
            </li>
          </ul>
        </li>

        <li className="menuItemHasChildren"> */}
          {/* <Link to={process.env.PUBLIC_URL + "/blog"}>News</Link>
          <ul className="subMenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                Blog Right Sidebar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                Blog Details
              </Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to={process.env.PUBLIC_URL + "/dashboard/dashboard"}>Deposit / Withdraw</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
