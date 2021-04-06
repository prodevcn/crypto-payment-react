import React from "react";
import Swiper from "react-id-swiper";
import SectionTitleThree from "../../components/ui/section-titles/SectionTitleThree";
import BrandLogoSingle from "../../components/brand-logos/BrandLogoSingle";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";

const BrandLogo = () => {
  const params = {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div
      className="dg__brand__area pt--90"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg/6.jpg"})`,
        backgroundRepeat: `no-repeat`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* section title */}
            <SectionTitleThree
              title="We work Together"
              text="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour."
            />
          </div>
        </div>
      </div>
      <div className="container-fluid space-between">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand__inner">
              <ul className="brand__list brand__acivation">
                <Swiper {...params}>
                  {brandLogoData &&
                    brandLogoData.map((single, key) => {
                      return (
                        <BrandLogoSingle
                          data={single}
                          key={key}
                          sliderClass="swiper-slide"
                        />
                      );
                    })}
                </Swiper>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
