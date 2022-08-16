import { buildergroopDiscordURL } from "@/constant";
import React from "react";
import { FAQCard } from "../cards/FAQCard";
import { SectionLayout } from "../layout/SectionLayout";
import UnderlineLink from "../links/UnderlineLink";

export const FAQSection = () => {
  const c = {
    h1: "FAQ’s",
    p: (
      <>
        You have questions and we’re here to answer them. If any of the FAQ's
        below don’t answer your pressing queries,{" "}
        <strong>
          Join our{" "}
          <UnderlineLink className="font-raleway" href={buildergroopDiscordURL}>
            Discord
          </UnderlineLink>{" "}
          and ask us.
        </strong>
      </>
    ),
    faqs: [
      {
        heading: "What is Buildergroop?",
        content: (
          <>
            Buildergroop is the community for GenZ coders, designers, and
            entrepreneurs. If you're young, ambitious, and wanting to build
            something awesome we're the people for you.
          </>
        ),
      },
      {
        heading: "How do prizes work?",
        content: (
          <>
            We understand that some participants will be outside of the US or
            working in teams. All prizes will be sent in cash to avoid
            international shipping costs or limiting your prize choices. The
            cash prizes will be the same as listed on retail websites in the
            USA.
          </>
        ),
      },
      {
        heading: "What is a hackathon?",
        content: (
          <>
            A hackathon is where a group of (or one) developer(s) build an
            awesome piece of software revolving around a particular theme via
            specific programming languages and technologies. The purpose of a
            hackathon is to "hack together" something in a given time frame. It
            need not be a fully functional product, however, it should be able
            to demonstrate your idea well enough in the most simple possible
            manner.
          </>
        ),
      },
      {
        heading: "Is there a theme?",
        content: (
          <>
            The theme for this hackathon is to create a live application using
            Hop's services. If you decide to register for the hackathon, you'll
            be able to onboard yourself to Hop free of charge and use it to help
            build your project. Aside from that prerequisite, there are no
            requirements.
          </>
        ),
      },
      {
        heading: "When is the hackathon?",
        content: (
          <>
            The hackathon will be hosted during the weekend of August 26th -
            28th. BuilderHacks starts at 9AM EST on the 26th and will go on for
            46 hours.
          </>
        ),
      },
      {
        heading: "Can I work in a team?",
        content: (
          <>
            To ensure we can distribute awesome prizes for all the winners in a
            team, we are limiting team sizes to a maximum of 2 individuals.
          </>
        ),
      },
      {
        heading: "What happens if I win as a 1 person team?",
        content: (
          <>
            The normal prize for first place is two M2 Macbook Airs. However,
            this assumes that your team has two individuals. If you're a one
            person team, we'll send over the cash equivalent.
          </>
        ),
      },
      {
        heading: "Is this hackathon beginner friendly?",
        content: (
          <>
            Absolutely! We'll be hosting Hop workshops in the week leading up to
            the hackathon to allow you to better understand how to use their
            tools. There are also plenty of experienced developers within our
            community on Discord who can help you out with questions if you have
            them.
          </>
        ),
      },
    ],
  };

  return (
    <SectionLayout autoSize={true} className="space-y-10">
      {/* heading */}
      <div className="space-y-3">
        <h1 className="font-krona text-[2rem]">{c.h1}</h1>
        <p className="max-w-[40rem] text-[1.1rem] text-description">{c.p}</p>
      </div>

      <div className="w-full space-y-10">
        {c.faqs.map((faq, i) => {
          return (
            <FAQCard num={i + 1} heading={faq.heading} content={faq.content} />
          );
        })}
      </div>
    </SectionLayout>
  );
};
