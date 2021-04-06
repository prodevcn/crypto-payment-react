import PropTypes from "prop-types";
import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaTumblr } from "react-icons/fa";

const TeamSingle = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="team">
        <div className="thumb">
          <a
            href={process.env.PUBLIC_URL + data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + data.image} alt="team images" />
          </a>
        </div>
        <div className="team__content">
          <h4>
            <a
              href={process.env.PUBLIC_URL + data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.name}
            </a>
          </h4>
          <p>{data.position}</p>
          <ul className="team__share d-flex justify-content-center">
            <li>
              <a
                href={data.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href={data.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
            <li>
              <a
                href={data.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href={data.tumblrUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTumblr />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

TeamSingle.propTypes = {
  data: PropTypes.object
};

export default TeamSingle;
