import React, { Component } from "react";

function Thankyou(props) {
  return (
    <div className="my-20 container mx-auto">
      <div className="row">
        <p
          className="text-orange-400"
          style={{
            fontWeight: "700",
            fontSize: "80px",
            marginTop: "4%",

            textAlign: "center",
          }}
        >
          Thank You
        </p>
        <p
          className="text-center "
          style={{ fontSize: "25px", color: "black" }}
        >
          Thank you for getting in touch. One of our team members will reach
          <br /> out to you within the shortest possible time. If you need
          project
          <br /> assistance, you can contact us at:
          <br />
          <br />
          <u className="text-orange-500">eat@fryfrenzy.com</u>
        </p>
      </div>
    </div>
  );
}

export default Thankyou;
