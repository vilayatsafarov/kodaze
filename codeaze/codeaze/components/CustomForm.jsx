import React, { useState, useEffect } from "react";
import "../styles/mcFormStyles.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);
  const clearFields = () => {
    setEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
      if (email) {
        confirm("We will send you regular updates . Are you sure ?.");
        setEmail('')
      } else {
        alert("Please fill the blanks..");
      }
  };
  const h3 = {
    color: "#2E265D",
    fontSize: "3rem",
    textAlign: "center",
    position: "relative",
    bottom: "125px",
    fontWeight: "500",
  };
  return (
    <form
      style={{ position: "relative", top: "30px" }}
      onSubmit={(e) => handleSubmit(e)}
      className="mc__form"
    >
      <h3 style={h3} className="mc__title">
        {status === "success" ? "Success!" : "Get regular updates!"}
      </h3>

      {status === "sending" && (
        <div
          style={{
            position: "relative",
            bottom: "50px",
            textAlign: "center",
            color: "#2E265D",
            fontWeight: "normal",
            fontSize: "16px",
          }}
          className="mc__alert mc__alert--sending"
        >
          Sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          style={{
            position: "relative",
            bottom: "50px",
            textAlign: "center",
            color: "#2E265D",
            fontWeight: "normal",
            fontSize: "16px",
          }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{
            position: "relative",
            bottom: "50px",
            textAlign: "center",
            color: "#2E265D",
            fontWeight: "normal",
            fontSize: "16px",
          }}
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div style={{ position: "relative", top: "10px" }}>
        <div
          className="mc__field-container "
          style={{ position: "relative", bottom: "50px" }}
        >
          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
        </div>
        <div style={{ position: "relative", bottom: "40px" }}>
          <InputField label="subscribe" type="submit" formValues={[email]} />
        </div>
      </div>
    </form>
  );
};
export default CustomForm;
