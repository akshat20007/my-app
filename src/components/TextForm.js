import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("All capitalized", "success");
  };
  const handleRe1Change = (e1) => {
    settR1(e1.target.value);
  };
  const handleRe2Change = (e1) => {
    settR2(e1.target.value);
  };

  const handledownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handledelClick = () => {
    setText("");
  };
  const handleWSClick = () => {
    
    let newText = text.trim();
    setText(newText);
  };
  const handleOnChange = (event) => {
    
    setText(event.target.value);
  };
  const handleReplaceClick = () => {
    let newText = text.replace(tR1, tR2);
    setText(newText);
  };
  const handleCopy = () => {   
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success")
  };
  const [text, setText] = useState("");
  const [tR1, settR1] = useState("");
  const [tR2, settR2] = useState("");
  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="container">
          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={handledownClick}
          >
            Convert to lowercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={handledelClick}
          >
            Delete Text
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={handleWSClick}
          >
            Delete White Spaces
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={handleCopy}
          >
            Copy text
          </button>
        </div>
        <div className="container " align="right" margin-right="30">
          <input
            type="search"
            className="col-auto my-3"
            value={tR1}
            onChange={handleRe1Change}
            id="exampleFormControlinput1"
            rows="1"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            disabled={text.length === 0}
          ></input>
          <input
            type="search"
            className="col-auto mx-3 my-3"
            value={tR2}
            onChange={handleRe2Change}
            id="exampleFormControlinput2"
            rows="1"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            disabled={text.length === 0}
          ></input>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "primary"
            } mx-3 my-1`}
            disabled={text.length === 0}
            onClick={handleReplaceClick}
          >
            Replace Word
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and<b> {text.length}</b> characters
        </p>
        <p>
          <b>
            {text.split(" ").length - 1 < 1
              ? "0.000"
              : 0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}
          </b>{" "}
          Minutes
        </p>
        <h2>Preview Text</h2>
        <p>
          {text.length > 0 ? text : "Enter something above to preview here"}
        </p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Enter something",
};
