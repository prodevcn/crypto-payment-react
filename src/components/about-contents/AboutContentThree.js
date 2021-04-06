import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const AboutContentThree = () => {
  return (
    <div className="dg__market__data pt--130 pb--140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="market__title">
              <h2>About Market Data</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form , by injected humour, or randomised words which
                don't look even slightly believable.{" "}
              </p>
            </div>
            <div className="market__tab">
              <Tab.Container defaultActiveKey="month">
                <div className="market__filter">
                  <div className="market__select">
                    <select>
                      <option>Bitcoin (BTC)</option>
                      <option>BUZZ (BUZZ)</option>
                      <option>BVC (BVC)</option>
                      <option>BXT (BXT)</option>
                      <option>BXT (BXT)</option>
                      <option>Bata (BTA)</option>
                      <option>BTD (BTD)</option>
                      <option>BTCRY (BTCRY)</option>
                    </select>
                  </div>
                  <Nav
                    variant="pills"
                    className="market__nav justify-content-center"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="day">Day</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="month">Month</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="year">Year</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="day">
                    <div className="image-wrapper text-center">
                      <img
                        src={process.env.PUBLIC_URL + "/images/about/cart1.png"}
                        className="img-fluid"
                        alt="chart images"
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="month">
                    <div className="image-wrapper text-center">
                      <img
                        src={process.env.PUBLIC_URL + "/images/about/cart1.png"}
                        className="img-fluid"
                        alt="chart images"
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="year">
                    <div className="image-wrapper text-center">
                      <img
                        src={process.env.PUBLIC_URL + "/images/about/cart1.png"}
                        className="img-fluid"
                        alt="chart images"
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContentThree;
