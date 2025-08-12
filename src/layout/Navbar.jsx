import React from "react";
import HomeIcon from "../assets/HomeIcon.svg";
import LoggedInUserPic from "../assets/images/LoggedInUserProfilePic.jpg";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="h-[54px] flex items-center">
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
          <div className="flex">
            <div className="flex border-r pr-3 border-gray-500">
              <div className="flex flex-col justify-center items-center px-6 hover:border-b-2 border-b-2 border-b-white pb-0.5 cursor-pointer hover:border-b-black">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>
                <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                  Home
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-6 hover:border-b-2 border-b-2 border-b-white pb-0.5 cursor-pointer hover:border-b-black">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                  My Network
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-6 hover:border-b-2 border-b-2 border-b-white pb-0.5 cursor-pointer hover:border-b-black">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                  Jobs
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-6 hover:border-b-2 border-b-2 border-b-white pb-0.5 cursor-pointer hover:border-b-black">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                  Messaging
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-6 hover:border-b-2 border-b-2 border-b-white pb-0.5 cursor-pointer hover:border-b-black">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                  Notifications
                </p>
              </div>
              <div className="px-2 flex flex-col items-center justify-center">
                <img
                  src={LoggedInUserPic}
                  alt=""
                  className="rounded-full h-6 w-6"
                />
                <div className="flex flex-row items-center gap-0.5 ">
                  <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                    Me
                  </p>
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="caret-small"
                    aria-hidden="true"
                    role="none"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    height="15"
                    width="15"
                  >
                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="px-2 flex flex-col items-center justify-center">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <div className="flex flex-row items-center gap-0.5 ">
                  <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                    For Business
                  </p>
                  {/* DownArrow  */}
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="caret-small"
                    aria-hidden="true"
                    role="none"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    height="15"
                    width="15"
                  >
                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer ">
                <svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="premium-chip-medium"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="24x24"
                  height={22}
                  width={22}
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
                <p className="font-normal text-center text-[RGBA(0, 0, 0, 0.9)] text-[12px] font-segoeUi">
                  Try Premium for BDT 0
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
