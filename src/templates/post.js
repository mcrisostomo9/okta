import Link from "gatsby-link";
import React from "react";
import { graphql } from "gatsby";

const PostPageTemplate = ({ data }) => {
  const { post } = data.okta;
  return (
    <div className="container max-w-screen-md p-8 mx-auto flex flex-col items-start">
      <div className="text-gray-600">
        <h1 className="text-left text-primary text-2xl">
          Post Name: {post.title}
        </h1>
        <p className="my-4 leading-loose">Post id: {post.id}</p>
        <p className="my-4 leading-loose">Post Body: {post.body}</p>
      </div>
      <Link to="/posts" className="btn btn-secondary">
        Back to posts
      </Link>
    </div>
  );
};

export default PostPageTemplate;

export const POST_QUERY = graphql`
  query PostQuery($id: ID!) {
    okta {
      post(id: $id) {
        id
        title
        body
      }
    }
  }
`;
