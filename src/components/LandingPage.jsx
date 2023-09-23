import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./../style/style.css";

export default function LandingPage() {
  const baseUrl = "https://nixsatapi.tpots.in/api/v1";
  const [home, sethome] = useState([]);
  const [image, setImage] = useState(
    "https://nixsatapi.tpots.in/storage/banners/1_movie_two_bg.png"
  );
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/tags/streams`).then((res) => {
      sethome(res.data.data);
    });
  }, []);
  console.log(home);

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

  return (
    <div className="w-[calc(100vw-3rem)] ml-[3rem] bg-black/75 overflow-hidden ">
      <div className="w-[calc(100vw-3rem)] relative bg-bg-black/75 flex justify-center object-cover overflow-hidden">
        <img className="w-[calc(100vw-3rem)] h-[100vh]" src={image} alt="" />
        <div className="absolute  top-[20rem]  left-[7rem] gap-3 flex flex-col">
          <h1 className="text-white  text-4xl ">{datas.title}</h1>
          <h1 className="text-white text-sm ">{datas.tags}</h1>
          <h1 className="text-white text-sm ">{datas.description}</h1>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="w-[90vw] h-[100vh] overflow-hidden absolute inset-0 mt-[16rem] mx-auto top-0 "
      >
        {home.map((m) =>
          m.streams.map((e) => (
            <div className="ml-3" onClick={() => setData(e)}>
              <img
                src={e.banner}
                className=""
                alt=""
                onClick={() => setImage(e.banner)}
                id={image == e.banner ? "active" : ""}
              />
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
}
