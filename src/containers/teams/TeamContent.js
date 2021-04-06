import React from "react";
import teamData from "../../data/teams/team-one.json";
import TeamSingle from "../../components/teams/TeamSingle.js";

const TeamContent = () => {
  return (
    <section className="dg__team__area section-padding--xl bg--white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tm__title text-center">
              <img
                src={process.env.PUBLIC_URL + "/images/team/title/1.png"}
                alt="title images"
              />
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
        <div className="team__wrapper">
          <div className="row">
            {teamData &&
              teamData.map((single, key) => {
                return <TeamSingle data={single} key={key} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContent;
