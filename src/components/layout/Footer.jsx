import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>B.TECH Khane Pakane Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @rendrosSite</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="">
          <AiFillYoutube />
        </a>
        <a href="">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Rendro1">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
