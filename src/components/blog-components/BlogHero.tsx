import { useRef, type FC } from "react";

const BlogHero: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <section className="py-20">
      <div className="container-custom flex flex-col gap-y-20">
        <div className="flex flex-col gap-y-6 text-center">
          <h1 className="text-custom-5xl">Blog & Article</h1>
          <p className="text-custom-grey-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div
          className="border-custom-grey-10 max-mobile-s:flex-col max-mobile-s:pl-2.5 flex w-full max-mobile-s:gap-y-10 max-mobile-s:items-center cursor-pointer rounded-3xl border border-solid py-2.5 pr-2.5 pl-13"
          onClick={() => inputRef.current?.focus()}
        >
          <input
            className="placeholder:text-custom-grey-40 grow text-xl outline-none"
            type="text"
            placeholder="Search article, news or recipe..."
            ref={inputRef}
          />
          <button className="button-custom max-w-54">Search</button>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
