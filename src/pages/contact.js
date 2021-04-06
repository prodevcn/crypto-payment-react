import React, {useState, Fragment} from 'react';
import MetaTags from 'react-meta-tags';
import Layout2 from '../layouts/layout2';

const Contact = (props) => {
    return(
        <Fragment>
            <MetaTags>
                <title>RoyalTransfert | Contact </title>
                <meta
                name="description"
                content="Contact"
                />
            </MetaTags>
            <Layout2 theme="black">
                {/* <HeroSlider />
                <WorkProcess />
                <HowWorks />
                <SoftwareDownload /> */}
            </Layout2>
        </Fragment>
    );
};

export default Contact;