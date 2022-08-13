import * as React from "react";
import Seo, { SeoProps } from "../Seo";
import Header from "./Header";

export default function Layout({
  children,
  seoProps,
  ...containerProps
}: {
  children: React.ReactNode;
  seoProps?: SeoProps;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <Seo {...seoProps} />

      <div {...containerProps}>
        <Header />
        {/* TODO: add height to header and space everything out */}
        {children}
      </div>
    </>
  );
}
