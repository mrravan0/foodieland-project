import type { FC } from "react";
import type { ContactFormProps } from "../../fake-data/contact-data/ContactType";
import RecipeCard from "../layout/RecipeCard";

const ContactForm: FC<ContactFormProps> = ({ data, sideInfo }) => {
  return (
    <section className="pt-20 pb-40">
      <div className="container-custom flex flex-col gap-y-40">
        <div className="flex flex-col gap-y-20">
          <h1 className="text-custom-5xl text-center font-semibold">
            Contact us
          </h1>
          <div className="max-laptop:gap-x-10 max-mobile:flex-col max-mobile:gap-y-20 flex items-center justify-between gap-x-15">
            <div className="cursor-pointer rounded-4xl bg-[linear-gradient(180deg,rgba(231,249,253,0)_0%,rgba(231,249,253,1)_100%)] px-7.5 duration-300 hover:scale-105">
              <img
                src="/contact-page/photo1.png"
                alt="chef photo"
              />
            </div>
            <form className="max-mobile:w-full flex grow flex-col gap-y-6">
              <div className="max-tablet:grid-cols-1 grid grid-cols-2 gap-x-10 gap-y-5">
                {data?.map((item) => (
                  <label
                    className="flex flex-col gap-y-3"
                    key={item.id}
                  >
                    <h2 className="text-custom-grey-60">{item.title}</h2>
                    <input
                      className="border-custom-grey-10 w-full rounded-2xl border border-solid p-5 outline-none"
                      type="text"
                      placeholder={item.placeholder}
                    />
                  </label>
                ))}
              </div>
              <div className="flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-custom-grey-60">Messages</h2>
                  <textarea
                    className="border-custom-grey-10 rounded-2xl border border-solid p-5"
                    placeholder="Enter your messages..."
                  ></textarea>
                </div>
                <button className="button-custom max-laptop:max-w-45 max-mobile:self-center max-w-60">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-laptop-s:grid-cols-2 max-mobile:grid-cols-1 grid grid-cols-4 gap-10">
          {sideInfo?.map((item) => (
            <RecipeCard
              data={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
