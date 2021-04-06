import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt
} from "react-icons/fa";
import {useSelector} from 'react-redux';
import {AiOutlineLogout} from 'react-icons/ai';
const MobileWidgets = () => {
  // const dispatch = useDispatch();
  const {authenticated} = useSelector((state) => state.auth);
  return (
    <div className="offcanvasWidgetArea">
      <div className="offCanvasContactWidget">
        <div className="headerContactInfo">
          <ul className="headerContactInfoList">
            {authenticated ? (
              <>
                <li>
                  <AiOutlineLogout />{" "}
                  <Link to={process.env.PUBLIC_URL + "/dashboard/logout"}>
                    Logout{" "}
                  </Link>
                </li>
              </>
              
            ):(
              <>
                <li>
                  <FaUserAlt />{" "}
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    Login / Register{" "}
                  </Link>
                </li>
              </>
            )}
            <li>
              <FaPhone /> <a href="tel://12452456012">(1245) 2456 012 </a>
            </li>
            <li>
              <FaRegEnvelope />{" "}
              <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="offCanvasWidgetSocial">
        <a
          href="//twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="//instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="//facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="//pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
        >
          <FaPinterestP />
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
