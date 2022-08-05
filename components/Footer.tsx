/** @jsx h */
import { h } from "preact";

export const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}{" "}
      <a href="https://twitter.com/fauh45">fauh45</a>
    </footer>
  );
};
