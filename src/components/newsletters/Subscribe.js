import PropTypes from "prop-types";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MdLocalPostOffice } from "react-icons/md";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () => {
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      });

    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return (
    <div className="input__box">
      <div className="mc-form">
        <MdLocalPostOffice />
        <input
          id="mc-form-email"
          className="email"
          ref={node => (email = node)}
          type="email"
          placeholder="Enter your email address..."
        />
        <button className="submit__btn" onClick={submit}>
          SUBSCRIBE
        </button>
      </div>

      {status === "sending" && (
        <div style={{ color: "#3498db", fontSize: "12px" }}>sending...</div>
      )}
      {status === "error" && (
        <div
          style={{ color: "#e74c3c", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#2ecc71", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const SubscribeEmail = ({ mailchimpUrl }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

SubscribeEmail.propTypes = {
  mailchimpUrl: PropTypes.string
};

export default SubscribeEmail;
