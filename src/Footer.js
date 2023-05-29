import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        {" "}
        coded by Mary Nevermann{" "}
        <a
          href="https://github.com/Mary-clouds/weather-react-app "
          target="_blank"
          rel="noopener norefereer"
        >
          open source on Github,
        </a>{" "}
        <a href=" " target="_blank" rel="noopener norefereer">
          hosted on Netlify
        </a>
      </p>
    </footer>
  );
}
