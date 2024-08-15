import React, { useState } from "react";
import "./Sublink.css";

function Sublink() {
  const [sub, setSub] = useState("Sublink");

  return (
    <div className="sublink">
      <ul className="sub">
        <li
          onClick={() => {
            setSub("dinnings");
          }}
        >
          Dinnings <hr />
        </li>
        <li
          onClick={() => {
            setSub("experienceandevent");
          }}
        >
          Experience and Event <hr />
        </li>
      </ul>
    </div>
  );
}

export default Sublink;
