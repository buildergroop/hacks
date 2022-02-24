import React from "react";

export const FooterSection = () => {
  return (
    <div className="px-[3rem] xl:px-20 py-10 w-screen flex flex-col gap-[2rem]">
      <div className="flex flex-wrap gap-20 mx-auto">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[1.2rem] text-accent-secondaryLight">
            Buildergroop
          </h3>
          <a href="https://discord.gg/builders">
            Join the Buildergroop Community
          </a>
          {/* <a href="https://builderhacks.devpost.com">BuilderHacks on Devpost</a> */}
          <a href="https://twitter.com/buildergroop">Find us on Twitter</a>
          <a href="https://www.youtube.com/channel/UCMBXL8jvG9D6W3Ngh6UfAbQ">
            Find us on Youtube
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[1.2rem] text-accent-secondaryLight">
            LambdaTest
          </h3>
          <a href="https://lambdatest.com">Lambdatest</a>
          <a href="https://www.lambdatest.com/test-at-scale">
            Test At Scale Platform
          </a>
          <a href="https://www.lambdatest.com/automation-testing">
            Automation Testing
          </a>
          <a href="https://www.lambdatest.com/hypertest">HyperTest</a>
          <a href="https://www.twitter.com/lambdatesting">
            Find LambdaTest on Twitter
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[1.2rem] text-accent-secondaryLight">
            The Buildergroop Team
          </h3>

          <span>
            Aaryaman Maheshwari{" "}
            <a href="https://twitter.com/aaryamvn" className="text-blue">
              (@aaryamvn)
            </a>
          </span>
          <span>
            Ari{" "}
            <a href="https://twitter.com/vagalol" className="text-blue">
              (@vagalol)
            </a>
          </span>
          <span>
            Bereket Semagn{" "}
            <a href="https://twitter.com/heybereket" className="text-blue">
              (@heybereket)
            </a>
          </span>
          <span>
            Tejas Ravishankar{" "}
            <a href="https://twitter.com/xtremedevx" className="text-blue">
              (@xtremedevx)
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-dark-secondary" />
      <p className="mx-auto text-center text-[0.9rem]">
        BuilderHacks S1 (Winter 21') is a joint effort conducted by{" "}
        <a href="https://buildergroop.com" className="text-blue">
          Buildergroop
        </a>{" "}
        and sponsored by{" "}
        <a href="https://lambdatest.com" className="text-blue">
          LambdaTest
        </a>
        .
      </p>
    </div>
  );
};
