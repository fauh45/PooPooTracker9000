/** @jsx h */
import { h } from "preact";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { Layout } from "../components/Layout.tsx";
import ButtonRoute from "../islands/ButtonRoute.tsx";

export default function Home() {
  return (
    <Layout title="PooPoo Tracker 9000">
      <Header />
      <main>
        <div class="fullwidth">
          <h1>Don't be pushed around by the fears in your mind.</h1>
          <p>
            The 💩 tracker 9000 tracks your daily poo, make sure you have a log
            of your every poo session anytime it is, and{" "}
            <abbr title="as long as you have internet">wherever</abbr> you are.
            Fear not, whatever condition you've going through, you have your poo
            logs on your side at any time.
          </p>
        </div>

        <div class="right_text fullwidth">
          <h1>Be the reason of your loved ones smiles.</h1>
          <p>
            You don't want to be the one who forgot your poo logs when you
            needing it the most. Be the reason of your family, friends, and your
            loved ones smile, be the one who have all the poo records on hand
            when you need it the most. And we're here to help you be the reason
            of you, and your loved one smiles.
          </p>
        </div>

        <div class="fullwidth">
          <h1>All secure and locked up.</h1>
          <p>
            We value your poo privacy, whether it is your poo logs, poo
            pictures, or even whenever you do poo are stored securely in our
            platform. We make sure even when you share, it is limited to those
            who you want it to see.
          </p>
        </div>

        <div class="center_text fullwidth">
          <h1>What you're waiting for?</h1>
          <p>
            Start logging your daily poo today securely, and privately on PooPoo
            Tracker 9000. Start by singing up down below!
          </p>
          <ButtonRoute samePage url="/signup">
            Sign Up
          </ButtonRoute>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
