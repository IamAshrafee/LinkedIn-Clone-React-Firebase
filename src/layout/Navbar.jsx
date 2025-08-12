import React from "react";
import HomeIcon from "../assets/HomeIcon.svg";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="h-[52px] flex items-center">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-2.5 items-center">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            <div className="flex border border-black rounded-4xl h-8 items-center">
              <div className="pl-3">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="search-medium"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  height="20"
                  width="20"
                >
                  <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                </svg>
              </div>

              <input
                type="text"
                className="border-none outline-none text-left w-full rounded-4xl pl-3 pr-2"
                placeholder="Search here...."
              />
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
