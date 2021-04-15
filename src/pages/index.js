import { Link } from "gatsby";
import React from "react";

const IndexPage = () => {
  return (
    <div className="container max-w-screen-md mx-auto px-4 pt-8 pb-24 leading-relaxed">
      <h1 className="text-3xl font-semibold">Okta Take-home Exercise</h1>
      <h2 className="text-xl mt-4">By Mark Crisostomo</h2>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">
          Task 1 requirements (Estimated time spent: ~5 mins)
        </h3>
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
        <h3 className="text-xl font-semibold">
          Task 2 requirements (Estimated time spent: ~2 hours)
        </h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>
            Recreate{" "}
            <a
              className="text-green-500 hover:underline hover:text-green-600"
              href="https://www.okta.com/oktane21/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.okta.com/oktane21/
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
          <li className="mt-2">Recreate register/login modal: &#10003;</li>
        </ol>
        <div className="mt-4">
          <p>Notes:</p>
          <ul className="list-inside list-disc">
            <li>
              Utilized TailwindCSS for the utility classes to speed up
              prototyping and utilized the frameworks breakpoints which is
              slightly different than the used one in the example.
            </li>
            <li>Used Open Sans as the font.</li>
          </ul>
          <p className="mt-4">
            Things I would have done if i had more allotted time:
          </p>
          <ul className="list-inside list-disc">
            <li>Organize css a bit cleaner</li>
            <li>Created a theme system with the various brand colors.</li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">
          Task 3 requirements (Estimated time spent: ~1 hour)
        </h3>
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
          <li>Used a simple form and input design: &#10003;</li>
          <li>Validate on submit: &#10003;</li>
          <li>Validated form hides form and displays 'Thank You': &#10003;</li>
        </ol>
        <div className="mt-4">
          <p className="mt-4">
            Things I would have done if i had more allotted time:
          </p>
          <ul className="list-inside list-disc">
            <li>Clean up my validation a bit more.</li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">
          Task 4 requirements(Estimated time: ~20 mins){" "}
        </h3>
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
            Use createPages in gatsby-node.js to create page for each post from
            graphql: created from first 50 post queries &#10003;{" "}
          </li>
        </ol>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">
          Task 5 requirements (Estimated time ~15 mins){" "}
        </h3>
        <ol className="list-decimal mt-4 list-inside">
          <li>Create utilities.js file: &#10003; </li>
          <li className="mt-2">
            Create uniqueNames function which merges 2 arrays and removes
            duplicates: &#10003;{" "}
          </li>
        </ol>
        <div className="mt-4">
          <p>Notes:</p>
          <ul className="list-inside list-disc">
            <li>
              Decided to use JavaScript just to be quicker with the task. If
              more time was allotted, I am confident I could have done both task
              5 and 6 in PHP.
            </li>
            <li>
              The returned user array is not sorted in a sequential order. Was
              not sure if that was a requirement or not but did not want to
              spend too much time given the limit
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">
          Task 6 requirements (Estimated time spent: ~30 mins)
        </h3>
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
            arrays: &#10003;
          </li>
        </ol>
        <div className="mt-4">
          <p>Notes:</p>
          <ul className="list-inside list-disc">
            <li>
              For the validation of the phone number, used a common regex I have
              used in multiple projects beforehand.
            </li>
            <li>
              For the multidimensional array function, since an array in PHP is
              an ordered map, my JS function makes the assumption that it will
              receive an array of JS objects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
