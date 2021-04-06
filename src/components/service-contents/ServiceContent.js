import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const ServiceContent = () => {
  return (
    <div className="about__dgtaka about--2 pt--140 pb--130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="dg__secure__inner">
              {/* section title */}
              <SectionTitleFour title="World Best Cryptocurrency" />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/6.png"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
