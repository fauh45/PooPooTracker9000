/** @jsx h */
import { PageProps } from "$fresh/server.ts";
import { h } from "preact";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { Layout } from "../components/Layout.tsx";

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

const LoginSignupPage = (props: PageProps) => {
  const authType = props.params[0];

  return (
    <Layout title={`${capitalize(authType)} | PooPoo Tracker 9000`}>
      <Header />
      <main>
        <h1>Welcome!</h1>
        <p>Please {authType} to the all mighty PooPoo Tracker 9000!</p>
      </main>
      <Footer />
    </Layout>
  );
};

export default LoginSignupPage;
