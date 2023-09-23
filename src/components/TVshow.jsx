import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Eye } from "@phosphor-icons/react";

export default function TVshow() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const baseUrl = "https://nixsatapi.tpots.in/api/v1";
  const [home, sethome] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/tags/streams`).then((res) => {
      sethome(res.data.data);
    });
  }, []);
  console.log(home);

  return (
    <div className="ml-[3rem] mt-11 flex flex-col gap-2">
      <div className="w-36 h-8 text-[#FAFAFA] border-l-4 border-[#2F2381] items-center flex justify-center">
        <h1 className="text-xl">Live TV Show</h1>
      </div>

      <Carousel responsive={responsive} infinite={true}>
        {home.map((m) =>
          m.streams.map((e) => (
            <div className="ml-3 text-[#FAFAFA]">
              <img src={e.logo} alt="" />
              <div className="flex justify-between text-xs p-2">
                <p>Start TV</p>
                <p className="flex items-center justify-center gap-1">
                  <Eye size={12} color="#fcfcfc" weight="light" /> {e.views}K{" "}
                </p>
              </div>
              <p>{e.title}</p>
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
}
