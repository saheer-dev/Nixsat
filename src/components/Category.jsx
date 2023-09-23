import React from "react";
import Trending from "./Trending";
import TVshow from "./TVshow";
import Movies from "./Movies";

export default function Category() {
  return (
    <div>
      <Trending />
      <TVshow />
      <Movies />
    </div>
  );
}
