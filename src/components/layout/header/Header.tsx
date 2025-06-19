import HeaderOverlay from "./HeaderOverlay";
import { Spin as Hamburger } from "hamburger-react";
import { useState, type FC } from "react";
import type { HeaderProps } from "../../../features/app/AppData";
import { Link } from "react-router-dom";

const Header: FC<HeaderProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="border-custom-grey-10 border-b border-solid py-10">
      <div className="container-custom flex items-center justify-between gap-x-2.5">
        <h1 className="font-secondary text-custom-4xl">
          <Link to="/">Foodieland</Link>
          <span className="text-custom-orange">.</span>
        </h1>
        <HeaderOverlay
          data={data}
          property="max-tablet:hidden contents"
        />
        <div className="min-tablet:hidden z-20">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            direction="right"
            label="Show menu"
          />
        </div>
        {isOpen && (
          <HeaderOverlay
            data={data}
            property="overlay-custom min-tablet:hidden"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
