import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold">Okta Take-home Exercise</h1>
      <h2 className="text-xl mt-4">By Mark Crisostomo</h2>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Task 1:</h3>
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
    </Layout>
  );
};

export default IndexPage;
