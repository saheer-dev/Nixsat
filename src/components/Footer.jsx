import { InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import React from "react";
import download from "../assets/store.png";

export default function Footer() {
  return (
    <div className="w-[100vw] bg-[#15141A] flex flex-col">
      <div className="w-[100vw] h-[23vh] flex  items-center justify-between p-32">
        <div className="flex flex-col gap-6 text-[#FAFAFA]">
          <h1 className="font-semibold text-lg">Company</h1>
          <div>
            <p className="font-thin">About us</p>
            <p className="font-thin">careers</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-[#FAFAFA]">
          <h1 className="font-semibold text-lg">Need Help </h1>
          <div>
            <p className="font-thin">visit help Center?</p>
            <p className="font-thin">Share Feedback</p>
          </div>
        </div>

        <div className="flex flex-col gap-9 text-[#FAFAFA]">
          <h1 className="font-semibold text-lg">Social Media </h1>
          <div className="flex items-center justify-center gap-2">
            <InstagramLogo size={28} color="#f7f7f7" weight="duotone" />
            <TwitterLogo size={28} color="#f7f7f7" weight="duotone" />
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[#FAFAFA] mt-5">
          <p className="font-thin">Download Our App</p>
          <img className="w-36" src={download} alt="" />
        </div>
      </div>

      <div className="w-[100vw] h-[4rem] border-t-[1px] border-white pl-32 pt-3 flex gap-8 text-[#FAFAFA] font-thin text-sm ">
        <p>2023 TV Cinema. All Rights Reserved.</p>
        <p>Terms of Use</p>
        <p>Privecy Policy</p>
      </div>
    </div>
  );
}
