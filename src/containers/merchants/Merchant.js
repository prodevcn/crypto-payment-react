import React from "react";
import SectionTitleFive from "../../components/ui/section-titles/SectionTitleFive";
import MerchantSingle from "../../components/merchants/MerchantSingle";
import merchantGroupOne from "../../data/merchants/merchant-one.json";
import merchantGroupTwo from "../../data/merchants/merchant-two.json";
import merchantGroupThree from "../../data/merchants/merchant-three.json";

const Merchant = () => {
  return (
    <section className="dg__merchants pb--140">
      {/* Start Single Merchants */}
      <div className="single__merchants pt--130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* section title */}
              <SectionTitleFive
                title="Business Support"
                text="Ariations of passages of randomised Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by
                  injected humour."
              />
            </div>
          </div>
        </div>
        <div className="merchants__list d-flex justify-content-between">
          {merchantGroupOne &&
            merchantGroupOne.map((single, key) => {
              return <MerchantSingle data={single} key={key} />;
            })}
        </div>
      </div>
      {/* End Single Merchants */}
      {/* Start Single Merchants */}
      <div className="single__merchants pt--130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* section title */}
              <SectionTitleFive
                title="Online Shopping"
                text="Ariations of passages of randomised Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by
                  injected humour."
              />
            </div>
          </div>
        </div>
        <div className="merchants__list d-flex justify-content-between">
          {merchantGroupTwo &&
            merchantGroupTwo.map((single, key) => {
              return <MerchantSingle data={single} key={key} />;
            })}
        </div>
      </div>
      {/* End Single Merchants */}
      {/* Start Single Merchants */}
      <div className="single__merchants pt--130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* section title */}
              <SectionTitleFive
                title="Banking Support"
                text="Ariations of passages of randomised Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by
                  injected humour."
              />
            </div>
          </div>
        </div>
        <div className="merchants__list d-flex justify-content-between">
          {merchantGroupThree &&
            merchantGroupThree.map((single, key) => {
              return <MerchantSingle data={single} key={key} />;
            })}
        </div>
      </div>
      {/* End Single Merchants */}
    </section>
  );
};

export default Merchant;
