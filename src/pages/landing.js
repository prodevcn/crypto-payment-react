import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import SoftwareDownload from "../components/software-downloads/SoftwareDownload";
import WorkProcess from "../containers/work-processes/WorkProcess";
import HowWorks from "../components/how-works/HowWorks";
import HeroSlider from "../containers/hero-sliders/HeroSlider";
import Layout from "../layouts/layout";
import axios from 'axios';
const Landing = () => {
    useEffect(() => {
      const url = 'https://essent.api.xpense2cash.udit.de/rest/api/Account/PasswordExpired';
      const headers = {
        'authorization': 'Bearer WZF8shZEIJjrT0RGEAZRB-eQqXyxt53HeboyOiiBXWUk9QsTc12mb_8c-0xPG4wIVzSC19KKUQoZGkRQTd6if7Z-ejR0zDQBW0gQX5EpxoAwuxin6sBHRFGXXZF3gBSOJ1uLxf9YkJs7CZuHySpjwOuVpCpdMq5IEIzY3dWvVPgIRk5peRs2_agAu-8FwKE_Z5LsjDxW8sOCIqe1j_iuFPomy0_7kPb5C4hzUYeLNsQ_jRCctzlGouZ3voKNV3VKarKnUBjyA4nnmqAaimtw256yVjD1EaXHkjaYi_8-y4NbSL73ajRb0m-7iLmBBTdZ89XMzYlL01dlgKQ-ILYtq6_g66VzIf0J2fSqSA7HXCwCIF5eKM-sGcur7Wv24Aso1kYJ2NfBZd__m8qC9VLd7R0LQPbdaVtk8doIzlfB4AL1oWDaLmmn4ycDBPFk3uMoAYQ7LzSJuRu14ihrVfq2Xqr2JLDGKn42IDyy6F9P5hCmYL_HnLL6mrI4cHto-2gQ0ZiAC5mhjzV8vnkNP3YWZb1ZNxFipiad_PeGvPMcH0b9STf0vfnA1VsQuhYGaJ6DiKbvy3wFPg4I7XmD702CpqecLz8dmVujNH4jrNQs58DQNEfTZxYlYE0sceyBv9ZJvz7jilYMs0i40xCpNdP-lGHAloTyaigQREF44ddPGW0'
      };
      axios.get(url, {}, headers)
       .then(data => {
         console.log(data.json());
       })
       .catch(err => {
         console.error(err);
       })
    });

    return (
        <Fragment>
          <MetaTags>
            <title>RoyalTransfert | Payment & Trading </title>
            <meta
              name="description"
              content="Landing Page of RoyalTransfert"
            />
          </MetaTags>
          <Layout theme="white">
            <HeroSlider />
            <WorkProcess />
            <HowWorks />
            <SoftwareDownload />
          </Layout>
        </Fragment>
    );
};

export default Landing;