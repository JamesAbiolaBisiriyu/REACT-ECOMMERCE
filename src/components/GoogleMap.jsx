/* eslint-disable react/no-unknown-property */
import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63653666704!2d3.1188032435039883!3d6.548028132609056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1709939833729!5m2!1sen!2sng"
          ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
