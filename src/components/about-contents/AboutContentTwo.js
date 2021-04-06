import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const AboutContentTwo = () => {
  return (
    <div className="dg__service__area bg--white padding--hor">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="service__chart">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/service.png"}
                  alt="chart"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6 offset-xl-1 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="service__inner">
              {/* section title */}
              <SectionTitleFour title="Best Services from us." />
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium, totam aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium, totam aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur. There are many variations passages
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContentTwo;
