import React from "react";
import LandingPage from "./LandingPage";
import Trending from "./Trending";
import TVshow from "./TVshow";
import Movies from "./Movies";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Trending />
      <TVshow />
      <Movies />
    </div>
  );
}
