import React, { useState } from "react";
import Maps from "./Maps";
import SearchBox from "./SearchBox";

export default function MapWithSearchBar() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "75%",
          height: "100%",
          padding: "20px", 
          marginRight: "auto",
          marginLeft: "90px",
        }}
      >
        <Maps selectPosition={selectPosition} />
      </div>
      <div
        style={{
          width: "30%",
          height: "100%",
          padding: "20px",
          marginLeft: "auto",
          marginTop: "7px"
        }}
      >
        <SearchBox
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
      </div>
    </div>
  );
}
