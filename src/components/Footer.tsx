import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <ul>
          <a
            href="https://x.com/BHill53334"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaTwitter /> My Twitter
            </li>
          </a>
          <a
            href="https://www.instagram.com/hill.bradley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaInstagram /> My Instagram
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/bradley-michael-hill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaLinkedin /> My LinkedIn
            </li>
          </a>
          <a
            href="https://github.com/Bradley-Hill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaGithub /> My GitHub
            </li>
          </a>
        </ul>
      </div>
      <div className="description">
        <p>This is a simple project, to allow people to create a deck of M:tG cards for commander and see approximate prices, using the Scryfall API</p>
      </div>
      <div className="disclaimer">This is a free project, created as an exercise for The Odin Project - Copyright Bradley Hill 2025</div>
    </footer>
  );
}

export default Footer;
