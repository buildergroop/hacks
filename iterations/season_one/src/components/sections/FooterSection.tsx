import React from "react";

export const FooterSection = () => {
  return (
    <div className="px-20 py-10 w-screen">
      <div className="flex items-center justify-between w-full">
        <a href="https://buildergroop.com">
          <img src="/BuildergroopLogo.png" alt="" className="h-[3.6rem]" />
        </a>
        <a href="https://lambdatest.com">
          <img src="/LambdatestLogo.png" alt="" className="h-[3rem]" />
        </a>
      </div>
    </div>
  );
};
