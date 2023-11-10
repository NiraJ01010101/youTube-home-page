import { useState } from "react";
import { Button } from "../components/Button";
import {
  BiArrowBack,
  BiBell,
  BiCloudUpload,
  BiMenu,
  BiSearch,
  BiSolidMicrophone,
  BiSolidUserCircle,
} from "react-icons/bi";

function PageHeader() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 items-center">
        <div
          className={`flex gap-4 flex-shrink-0 items-center  ${
            showSearchBar ? "hidden" : "flex"
          }`}
        >
          <Button variant="ghost" size="icon">
            <BiMenu />
          </Button>
          <a href="#">
            <img className="h-16" src="./images/youtubeLogo.png" alt="" />
          </a>
        </div>
        <form
          action=""
          className={` gap-4 flex-grow justify-center ${
            !showSearchBar ? "hidden md:flex" : "flex "
          }`}
        >
          {showSearchBar && (
            <Button
              onClick={() => setShowSearchBar(false)}
              variant="ghost"
              size="icon"
            >
              <BiArrowBack />
            </Button>
          )}
          <div className="flex flex-grow max-w-[600px]">
            <input
              type="search"
              placeholder="Search"
              className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
            />
            <Button
              type="button"
              className="py-1 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0"
            >
              <BiSearch />
            </Button>
          </div>
          <Button type="button" size="icon">
            <BiSolidMicrophone />
          </Button>
        </form>
        <div
          className={`flex md:gap-2 flex-shrink-0 ${
            showSearchBar ? "hidden" : "flex"
          }`}
        >
          <Button
            onClick={() => setShowSearchBar(true)}
            className="md:hidden flex"
            variant="ghost"
            size="icon"
          >
            <BiSearch />
          </Button>
          <Button variant="ghost" size="icon">
            <BiCloudUpload />
          </Button>
          <Button variant="ghost" size="icon">
            <BiBell />
          </Button>
          <Button variant="ghost" size="icon">
            <BiSolidUserCircle />
          </Button>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
