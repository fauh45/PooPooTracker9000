/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

export type SEOProps = {
  title?: string;
};

const SEO = ({ title }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <link rel="preload" href="index.css" as="style" />
      <link
        rel="preload"
        href="https://unpkg.com/awsm.css@3.0.7/dist/awsm_theme_big-stone.min.css"
        as="style"
      />
      <link
        rel="preload"
        href="https://unpkg.com/awsm.css@3.0.7/dist/awsm_theme_pearl-lusta.min.css"
        as="style"
      />

      <link rel="stylesheet" href="index.css" />
      {/* CSS for users with dark mode */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/awsm.css@3.0.7/dist/awsm_theme_big-stone.min.css"
        media="(prefers-color-scheme: dark)"
      />

      {/* CSS for users without dark mode  */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/awsm.css@3.0.7/dist/awsm_theme_pearl-lusta.min.css"
        media="(prefers-color-scheme: no-preference), (prefers-color-scheme: light)"
      />
    </Head>
  );
};

export type LayoutProps = SEOProps & {
  children: ComponentChildren;
};

export const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <>
      <SEO {...rest} />
      <body>{children}</body>
    </>
  );
};
