import React from "react";
import styles from "../styles/InputField.module.css";
const InputField = (props) => {
  //Checks if all the fields are filled and if an @ sign is used in the email field
  const validateInput = (values) => {
    if (values.some((f) => f === "") || values[0].indexOf("@") === -1) {
      return true;
    } else {
      return false;
    }
  };
  if (props.type === "submit") {
    return (
      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className={`col-lg-12 primaryBtn primaryBtn--big g__justify-self-center ${styles.submit}`}
            type="submit"
            value={props.label}
            disabled={validateInput(props.formValues)}
          />
        </div>
      </div>
    );
  } else if (props.type === "textarea") {
    return (
      <label className="inputField__label">
        {props.label}
        <textarea
          onChange={(e) => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field"
          rows={7}
          name={props.name}
        />
      </label>
    );
  } else {
    return (
      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            onChange={(e) => props.onChangeHandler(e.target.value)}
            type={props.type}
            placeholder={"Enter your email.."}
            value={props.value}
            required={props.isRequired}
            className={`inputField__field col-lg-12 ${styles.input}`}
            name={props.name}
          />
        </div>
      </div>
    );
  }
};

export default React.memo(InputField);
