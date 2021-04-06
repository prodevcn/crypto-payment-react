import React from "react";

const ServiceContentThree = () => {
  return (
    <section className="dg__service__area bg--white padding--hor">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="service__chart">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/service.png"}
                  alt="service images"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6 offset-xl-1 md__mt--40 sm__mt--40">
            <div className="service__inner">
              <h3 className="title__with__border">Best Services from us.</h3>
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
    </section>
  );
};

export default ServiceContentThree;
