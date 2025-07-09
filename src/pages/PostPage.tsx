import { Fragment, type FC } from "react";
import PostHero from "../components/post-components/PostHero";
import PostInfo from "../components/post-components/PostInfo";
import * as PostData from "../fake-data/post-data/postData";

const PostPage: FC = () => {
  return (
    <Fragment>
      <PostHero />
      <PostInfo data={PostData.postInfoData} />
    </Fragment>
  );
};

export default PostPage;
