import React from "react";
import SubscribeEmail from "./Subscribe";

const Newsletter = () => {
  return (
    <div className="newsletter__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter__container">
              <div className="newsletter__inner">
                <h2>Subscribe for latest updates</h2>
                <SubscribeEmail mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
