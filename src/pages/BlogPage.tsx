import { Fragment, type FC } from "react";
import BlogHero from "../components/blog-components/BlogHero";
import * as BlogData from "../fake-data/blog-data/BlogData";

const BlogPage: FC = () => {
  return (
    <Fragment>
      <BlogHero data={BlogData.blogListData} />
    </Fragment>
  );
};

export default BlogPage;
