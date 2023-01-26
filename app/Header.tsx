import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
//====================================================

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <div></div>
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The Daily News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton/>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
