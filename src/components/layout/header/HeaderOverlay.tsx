import FacebookIcon from "../../../svg/FacebookIcon";
import InstagramIcon from "../../../svg/InstagramIcon";
import TwitterIcon from "../../../svg/TwitterIcon";
import type { HeaderProps } from "../../../features/app/AppData";
import { Link } from "react-router-dom";
import type { FC} from "react";

const HeaderOverlay: FC<HeaderProps> = ({ data, property }) => {
  return (
    <div className={property}>
      <nav>
        <ul className="max-laptop:gap-x-15 max-tablet:flex-col max-tablet:gap-y-10 flex items-center gap-x-20">
          {data?.map((item) => (
            <li
              className="animate-custom"
              key={item.id}
            >
              <Link to="/">{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="max-tablet:justify-center flex items-center gap-x-10">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
};
export default HeaderOverlay;
