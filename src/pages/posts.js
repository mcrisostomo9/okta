import React from "react";
import { graphql, Link } from "gatsby";

const PostsPage = ({ data }) => {
  return (
    <div className="container p-8 mx-auto flex flex-col">
      <h1 className="text-center text-primary font-bold text-4xl">Posts</h1>
      <section className="mt-16 text-gray-600">
        <div className="container px-4 py-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.okta.posts.data.map((post) => {
              const postLink = `/posts/${post.id}`;
              return (
                <div key={post.id} className="">
                  <div className="h-full bg-gray-100 bg-opacity-75 p-8 rounded-lg text-center flex flex-col">
                    <h2 className="text-2xl  font-semibold text-primary mb-3">
                      {post.title}
                    </h2>
                    <p className="leading-relaxed mb-3">{post.body}</p>
                    <Link
                      to={postLink}
                      className="btn btn-primary inline-block mt-auto self-center"
                    >
                      Go to Post {post.id}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostsPage;

export const POSTS_QUERY = graphql`
  query PostsQuery {
    okta {
      posts(options: { paginate: { limit: 50 } }) {
        data {
          id
          title
          body
        }
      }
    }
  }
`;
