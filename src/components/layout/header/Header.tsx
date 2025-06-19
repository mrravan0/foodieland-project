import FacebookIcon from "../../../svg/FacebookIcon";
import InstagramIcon from "../../../svg/InstagramIcon";
import TwitterIcon from "../../../svg/TwitterIcon";
import type { FC } from "react";
import type { HeaderProps } from "../../../features/app/AppData";
import { Link } from "react-router-dom";

const Header: FC<HeaderProps> = ({ data }) => {
  return (
    <header className="border-custom-grey-10 border-b border-solid py-10">
      <div className="container-custom flex items-center justify-between gap-x-2.5">
        <h1 className="font-secondary text-custom-4xl">
          <Link to="/">Foodieland</Link>
          <span className="text-custom-orange">.</span>
        </h1>
        <nav>
          <ul className="max-laptop:gap-x-15 flex items-center gap-x-20">
            {data?.map((item) => (
              <li className="hover:scale-110 duration-300" key={item.id}>
                <Link to="/">{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-x-10">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
