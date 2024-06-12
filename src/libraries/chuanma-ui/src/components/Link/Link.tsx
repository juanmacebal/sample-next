import React from "react";
import { LinkProps } from "./Link.types";
import "./Link.css";

export const Link: React.FC<LinkProps> = ({text, onClick}) => {
  return (
    <div role="button" className="link" onClick={onClick} onKeyDown={
      (e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }
    }>
      {text}
    </div>
  );
};

export default Link;