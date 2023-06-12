import React from "react";
import bannerImage from "../images/bannerimage.png";
function ImageComponent() {
  return (
    <div>
  <img
    src={bannerImage}
    alt="Pic depicting food waste"
    style={{ maxWidth: "100%" }}
  />
</div>

  );
}

export default ImageComponent;
