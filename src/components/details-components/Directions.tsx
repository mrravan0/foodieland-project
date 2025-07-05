import type { FC } from "react";

const Directions: FC = () => {
  return (
    <section className="pt-4 pb-40">
      <div className="container-custom flex flex-col gap-y-8">
        <h1 className="text-5xl font-bold">Directions</h1>
        <div className="flex flex-col gap-y-24">
          <div className="after:bg-custom-grey-10 relative flex w-full max-w-287.5 flex-col after:absolute after:-bottom-12 after:left-0 after:h-0.5 after:w-full">
            <h2 className="text-custom-4xl mb-6">
              1. Lorem ipsum dolor sit amet
            </h2>
            <p className="text-custom-grey-60 mb-13">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <img
              className="mb-12"
              src="/details-page/photo2.png"
              alt=""
            />
            <p className="text-custom-grey-60">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
          <div className="after:bg-custom-grey-10 relative flex w-full max-w-287.5 flex-col after:absolute after:-bottom-12 after:left-0 after:h-0.5 after:w-full">
            <h2 className="text-custom-4xl mb-6">
              2. Lorem ipsum dolor sit amet
            </h2>
            <p className="text-custom-grey-60">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
          <div className="after:bg-custom-grey-10 relative flex w-full max-w-287.5 flex-col after:absolute after:-bottom-12 after:left-0 after:h-0.5 after:w-full">
            <h2 className="text-custom-4xl mb-6">
              3. Lorem ipsum dolor sit amet
            </h2>
            <p className="text-custom-grey-60">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
