import React from "react";

import { Toast } from "react-bootstrap";

const Alert = (props) => {
  const { show, message } = props;

  const toastCss = {
    position: "fixed",
    top: "80px",
    right: "10px",
    zIndex: "1",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  return (
    <div style={show ? toastCss : null}>
      <Toast className={"border border-success"} show={show}>
        <Toast.Header className={"bg-success text-white"} closeButton="{false}">
          <strong className="mr-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Alert;
