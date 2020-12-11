import React, { useState, useContext } from "react";
import { CAlert, CProgress } from "@coreui/react";

const Alert = (props) => {
  const [visible, setVisible] = useState(5);

  return (
    <CAlert color={props.type} show={visible} closeButton onShowChange={setVisible}>
      {props.message}
      <CProgress
        striped
        color={props.type}
        value={Number(visible) * 20}
        size="xs"
        className="mb-3"
      />
    </CAlert>
  );
};

export default Alert;
