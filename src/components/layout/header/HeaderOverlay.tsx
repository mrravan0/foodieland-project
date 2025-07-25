import FacebookIcon from "../../../svg/FacebookIcon";
import InstagramIcon from "../../../svg/InstagramIcon";
import TwitterIcon from "../../../svg/TwitterIcon";
import type { LayoutProps } from "../../../fake-data/layout-data/LayoutType";
import { Link } from "react-router-dom";
import type { FC } from "react";

const HeaderOverlay: FC<LayoutProps> = ({ data, property, isClicked }) => {
  return (
    <div className={property}>
      <nav>
        <ul className="max-laptop:gap-x-15 max-tablet:flex-col max-tablet:gap-y-10 flex items-center gap-x-20">
          {data?.map((item) => (
            <li
              className="animate-custom"
              key={item.id}
            >
              <Link
                to={item.to}
                onClick={() => isClicked!(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="max-tablet:justify-center flex items-center gap-x-10">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon color="black" />
      </div>
    </div>
  );
};
export default HeaderOverlay;
