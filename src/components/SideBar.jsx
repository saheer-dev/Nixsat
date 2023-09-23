import {
  House,
  MagnifyingGlass,
  MonitorPlay,
  SquaresFour,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="w-[3rem] h-[100vh]  bg-[#15141A] items-center flex flex-col justify-center gap-10 fixed">
      <Link to="/Search">
        {" "}
        <p>
          <MagnifyingGlass size={26} color="#f0eaea" weight="bold" />
        </p>{" "}
      </Link>
      <Link to="/">
        {" "}
        <p>
          <House size={26} color="#f0eaea" weight="bold" />
        </p>{" "}
      </Link>
      <Link to="/category">
        <SquaresFour size={26} color="#f0eaea" weight="bold" />
      </Link>
      <p>
        <MonitorPlay size={26} color="#f0eaea" weight="bold" />
      </p>
    </div>
  );
}
