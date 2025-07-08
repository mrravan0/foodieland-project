import { Fragment, type FC } from "react";
import BlogHero from "../components/blog-components/BlogHero";
import * as BlogData from "../fake-data/blog-data/BlogData";
import BlogList from "../components/blog-components/BlogList";
import { homeRecipesData } from "../fake-data/home-data/HomeData";

const BlogPage: FC = () => {
  return (
    <Fragment>
      <BlogHero />
      <BlogList
        data={BlogData.blogListData}
        sideInfo={homeRecipesData}
      />
    </Fragment>
  );
};

export default BlogPage;
