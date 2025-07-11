import type { FC } from "react";
import type { PostInfoProps } from "../../fake-data/post-data/postType";

const PostInfo: FC<PostInfoProps> = ({ data }) => {
  return (
    <section className="pb-32.5">
      <div className="container-custom max-laptop:gap-x-12.5 flex items-start gap-x-16.75">
        <div className="flex flex-col gap-y-27.5">
          {data?.map(
            (item) =>
              item.id < 3 && (
                <div
                  className="flex flex-col gap-y-6"
                  key={item.id}
                >
                  <h1 className="text-custom-4xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-custom-grey-60">{item.description}</p>
                </div>
              ),
          )}
          <div className="flex flex-col gap-y-16">
            <div className="flex flex-col gap-y-14">
              <div className="flex flex-col gap-y-8">
                <h1 className="text-custom-4xl font-semibold">
                  Do you cook at home on your days off?
                </h1>
                <img
                  src="/details-page/photo2.png"
                  alt=""
                />
                <p className="text-custom-grey-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                {data?.map(
                  (item) =>
                    item.id === 3 && (
                      <div
                        className="flex flex-col gap-y-6"
                        key={item.id}
                      >
                        <h1 className="text-custom-4xl font-semibold">
                          {item.title}
                        </h1>
                        <p className="text-custom-grey-60">
                          {item.description}
                        </p>
                      </div>
                    ),
                )}
              </div>
            </div>
            <div className="max-laptop:text-4xl bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_100%)] px-10 py-15 text-5xl max-mobile:text-xl">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.”
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <h1 className="text-custom-4xl font-semibold">
                What is the biggest misconception that people have about being a
                professional chef?
              </h1>
              <p className="text-custom-grey-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostInfo;
