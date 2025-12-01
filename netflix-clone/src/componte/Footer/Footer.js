import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const footerLinks = [
  "Audio Description",
  "Investor Relations",
  "Legal Notice",
  "Help Center",
  "Jobs",
  "Cookie Preferences",
  "Gift Cards",
  "Terms of Use",
  "Corporate Information",
  "Media Center",
  "Privacy",
  "Contact Us",
];

const Footer = () => {
  // Links in 4 Spalten teilen
  const columns = [
    footerLinks.slice(0, 3),
    footerLinks.slice(3, 6),
    footerLinks.slice(6, 9),
    footerLinks.slice(9, 12),
  ];

  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Kontakt Info */}
        <p className="contact-info">Fragen? Rufen Sie an: 0800-000-7484</p>

        {/* Social Icons */}
        <div className="footer_icons">
          <a href="1">
            <FacebookIcon />
          </a>
          <a href="2">
            <InstagramIcon />
          </a>
          <a href="3">
            <YouTubeIcon />
          </a>
        </div>

        {/* Links Grid */}
        <div className="footer_data">
          {columns.map((col, i) => (
            <ul key={i}>
              {col.map((link, j) => (
                <li key={j}>
                  <a href="4">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Service Code Button */}
        <button className="service_code">Service Code</button>

        {/* Language Selector */}
        <div className="language-selector">
          <select>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Copyright */}
        <p className="copy-write">
          &copy; 1997–{new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
