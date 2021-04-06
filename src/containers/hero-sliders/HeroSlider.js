import React from "react";
import sliderData from "../../data/hero-sliders/hero-slider-two.json";
import HeroSliderSingle from "../../components/hero-sliders/HeroSliderSingle.js";

const HeroSlider = () => {
  return (
    <div className="dg__slider__area slider--2">
      {sliderData &&
        sliderData.map((single, key) => {
          return <HeroSliderSingle data={single} key={key} />;
        })}
    </div>
  );
};

export default HeroSlider;
