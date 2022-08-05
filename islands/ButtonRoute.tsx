/** @jsx h */
import { ComponentChildren, h } from "preact";

type ButtonRouteProps = {
  samePage?: boolean;
  url: string;
  children?: ComponentChildren;
};

const ButtonRoute = ({ url, samePage, children }: ButtonRouteProps) => {
  return (
    <button
      onClick={() => (!samePage ? window.open(url) : (location.href = url))}
    >
      {children}
    </button>
  );
};

export default ButtonRoute;
