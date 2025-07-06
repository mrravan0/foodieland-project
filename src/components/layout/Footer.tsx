import type { FC } from "react";
import { Link } from "react-router-dom";
import type { LayoutProps } from "../../fake-data/layout-data/LayoutType";
import TwitterIcon from "../../svg/TwitterIcon";
import InstagramIcon from "../../svg/InstagramIcon";
import FacebookIcon from "../../svg/FacebookIcon";

const Footer: FC<LayoutProps> = ({ data }) => {
  return (
    <footer className="pt-40">
      <div className="container-custom flex flex-col gap-y-12.5">
        <div className="max-tablet:flex-col max-tablet:gap-y-10 border-custom-grey-10 flex items-center justify-between gap-x-2.5 border-b border-solid pb-12.5">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-secondary text-custom-4xl">
              <Link to="/">Foodieland</Link>
              <span className="text-custom-orange">.</span>
            </h1>
            <p className="text-custom-grey-60 font-light">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
            </p>
          </div>
          <ul className="max-tablet:w-full max-tablet:justify-between flex items-center gap-15 font-semibold max-mobile-s:flex-col">
            {data?.map((item) =>
              item.id !== "1" ? (
                <li key={item.id}>
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>
        <div className="max-mobile-s:flex-col max-mobile-s:gap-y-6 flex w-full max-w-205 items-center justify-between self-end">
          <p>
            © 2020 Flowbase. Powered by
            <span className="text-custom-orange"> Webflow</span>
          </p>
          <div className="flex items-center gap-x-10">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon color="black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
