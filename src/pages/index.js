import { Link } from "gatsby";
import React from "react";

const IndexPage = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-24">
      <h1 className="text-3xl font-semibold">Okta Take-home Exercise</h1>
      <h2 className="text-xl mt-4">By Mark Crisostomo</h2>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Task 1 requirements</h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>
            Create Github Repo: &#10003;
            <a
              className="ml-4 text-green-500 hover:underline hover:text-green-600"
              href="https://github.com/mcrisostomo9/okta"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </li>
          <li className="mt-2">Create netlify account: &#10003;</li>
          <li className="mt-2">Install Gatsby: &#10003;</li>
          <li className="mt-2">Commit and push initial changes: &#10003;</li>
          <li className="mt-2">
            Deploy to netlify: &#10003;{" "}
            <a
              className="ml-4 text-green-500 hover:underline hover:text-green-600"
              href="https://okta-take-home.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://okta-take-home.netlify.app/
            </a>
          </li>
        </ol>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Task 2 requirements </h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>
            Recreate{" "}
            <a
              className="text-green-500 hover:underline hover:text-green-600"
              href="https://github.com/mcrisostomo9/okta"
              target="_blank"
              rel="noreferrer"
            >
              https://www.okta.com/oktane21/{" "}
            </a>
          </li>
          <li className="mt-2">
            Url should be /test-homepage: &#10003;:{" "}
            <Link
              to="/test-homepage"
              className="text-green-500 hover:underline hover:text-green-600"
            >
              /test-homepage
            </Link>
          </li>
          <li className="mt-2">Build the Hero section: &#10003;</li>
          <li className="mt-2">Build the Why Attend section: &#10003;</li>
          <li className="mt-2">
            Recreate register/login modal: need to add animation
          </li>
        </ol>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Task 3 requirements </h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>
            Create form on page /contact: &#10003;{" "}
            <Link
              to="/contact"
              className="text-green-500 hover:underline hover:text-green-600"
            >
              /contact
            </Link>
          </li>
        </ol>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Task 4 requirements </h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>
            Create page /posts from graphql (queried using
            gatsby-source-graphql): &#10003;{" "}
            <Link
              to="/posts"
              className="text-green-500 hover:underline hover:text-green-600"
            >
              /posts
            </Link>
          </li>
          <li className="mt-2">
            Create page for each post from graphql: created from first 50 post
            queries &#10003;{" "}
          </li>
        </ol>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Task 5 requirements </h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>
            Create utilities.js file (decided to use JavaScript over PHP due to
            time and being more comfortable with JS): &#10003;{" "}
          </li>
          <li className="mt-2">
            Create uniqueNames function which merges 2 arrays and removes
            duplicates: &#10003;{" "}
          </li>
        </ol>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Task 6 requirements </h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>Create validation.js file: &#10003; </li>
          <li className="mt-2">
            Write a function that validates a phone number &#10003; <br />
            Used a regex that accepts format such as:
            <ul className="list-disc list-inside">
              <li> 5555555555</li>
              <li>555-555-5555,</li>
              <li>(555)555-5555</li>
            </ul>
          </li>
          <li className="mt-2">
            Write a function that returns duplicate values from multidimensional
            arrays: (Assumption: Nested PHP array in example is an array of
            objects in my JS function): &#10003;
          </li>
        </ol>
      </div>
    </div>
  );
};

export default IndexPage;
