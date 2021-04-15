import React from "react";
import * as css from "./styles.module.css";

const CARD_DATA = [
  {
    title: "Get Energized",
    content: `Inspiring keynotes. Hands-on training with experts. Oktane21 is the place to learn new skills, gain an Okta certification, engage with new ideas, and emerge ready to create the next transformative experiences.`,
  },
  {
    title: "Build Community",
    content: `Join like-minded people who understand the pivotal role of identity in our changing world. Meet leaders and practitioners across industries building breakthrough identity experiences. Share your stories, learn from others, and make unexpected connections.`,
  },
  {
    title: "Peer Into the Future",
    content: `Hear from industry leaders first-hand about what’s next in identity. Get early access to Okta’s product vision. Preview feature enhancements before they even go live. Connect with Okta partners and emerging vendors working at the forefront of solving the toughest security and access challenges.`,
  },
];

const WhyAttend = () => {
  return (
    <section className={css.root}>
      <div className={css.contentContainer}>
        <h2 className={css.sectionTitle}>Why Attend</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 gap-8 items-center">
          <div>
            <div className={css.iframeWrapper}>
              <iframe
                title="Okta video"
                className="absolute w-full h-full top-0 left-0 right-0 bottom-0"
                src="https://play.vidyard.com/wTGELwNR75nnHuVJPuvtWJ?disable_popouts=1&type=inline&v=4.2.29"
              />
            </div>
          </div>
          <div className="text-primary text-base 2xl:text-lg">
            <p>
              The event will kick off with a real-world documentary that
              explores what it’s like to build an identity platform at one of
              the fastest-growing tech companies during one of the hardest years
              in modern history.
            </p>
            <p className="mt-4">
              Oktane21 is a space to unite. To forge and deepen our connections
              -- to each other and to the people who increasingly rely on our
              technology in their lives. To understand where we’re going and how
              to get there, so we can keep building the experiences that connect
              with people and transform our world.
            </p>
            <p className="mt-4">
              This is a completely free, virtual conference, accessible from
              anywhere. The health and safety of our community is of utmost
              importance to us. Don’t miss this unique opportunity to explore
              the future of how people, technology, and identity intersect.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARD_DATA.map((card) => (
            <div className={css.card} key={card.title}>
              <h4 className="text-lg lg:text-xl">{card.title}</h4>
              <p className="my-4 lg:my-8 text-base lg:text-lg">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
