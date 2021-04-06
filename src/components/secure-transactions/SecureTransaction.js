import React from "react";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

const SecureTransaction = () => {
  return (
    <div className="dg__secure__transaction">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="dg__secure__inner">
              <h2>
                A Most Powerful wallet is develop for you, you can use this
                wallet for next secure transaction.
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit,
              </p>
              <Link
                className="secure__btn dg__btn btn--trans"
                to={process.env.PUBLIC_URL + "/contact"}
              >
                apply For Wallet
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <ReactWOW duration="2s" animation="fadeInRight">
              <div className="dg__secure__thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/2.png"}
                  alt="secure images"
                />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureTransaction;
