import React from "react";
import SectionTitleSix from "../../components/ui/section-titles/SectionTitleSix";
import serviceFeatureData from "../../data/service-features/service-feature-one.json";
import ServiceFeatureSingle from "../../components/service-contents/ServiceFeatureSingle";

const ServiceFeature = () => {
  return (
    <div
      className="dg__service__area section-padding--xlg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg/9.jpg"})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitleSix
              title="How to make security"
              text="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour."
            />
          </div>
        </div>
      </div>
      <div className="custom__service__width decrease--top">
        {serviceFeatureData &&
          serviceFeatureData.map((single, key) => {
            return <ServiceFeatureSingle data={single} key={key} />;
          })}
      </div>
    </div>
  );
};

export default ServiceFeature;
