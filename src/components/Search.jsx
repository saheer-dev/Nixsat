import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye } from "@phosphor-icons/react";

export default function Search() {
  const baseUrl = "https://nixsatapi.tpots.in/api/v1";
  const [home, sethome] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/tags/streams`).then((res) => {
      sethome(res.data.data);
    });
  }, []);
  console.log(home);

  return (
    <div className="w-[100vw]  h-[100vh] bg-[#15141A] flex flex-col items-center p-10">
      <div className="w-[45vw] h-[2.5rem] flex items-center justify-cente border-2 border-none bg-gray-500 pl-2 rounded-lg">
        <MagnifyingGlass size={23} color="#fcfcfc" weight="light" />
        <input
          className="w-[42vw] h-[2.4rem] p-2 bg-transparent text-white border-0 outline-none"
          type="text"
          placeholder="Search Anything"
        />
      </div>

      <div className="w-[calc(100vw-3rem)] h-[80vh]">
        <div className="ml-[3rem] mt-11 flex flex-col gap-2">
          <div className="  text-[#FAFAFA]  items-center grid grid-cols-4">
            {home.map((m) =>
              m.streams.map((e) => (
                <div className="w-[19rem]  text-[#FAFAFA]">
                  <img src={e.banner} alt="" />
                  <div className="flex justify-between text-xs p-2">
                    <p>Start TV</p>
                    <p className="flex items-center justify-center gap-1">
                      <Eye size={12} color="#fcfcfc" weight="light" /> {e.views}
                      K{" "}
                    </p>
                  </div>
                  <p>{e.title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
