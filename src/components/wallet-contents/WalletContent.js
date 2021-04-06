import React from "react";
import { Link } from "react-router-dom";

const WalletContent = () => {
  return (
    <div className="dg__wallet__area section-padding--xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="wallet__inner">
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
              <div className="wallet__btn">
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                  apply For Wallet
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="wallet__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/wallet.png"}
                alt="wallet images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletContent;
