import React from "react";
import "../styles/footer.css";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  function FooterLinks(props) {
    return (
      <div className="footer-links">
        <h3>{props.title}</h3>
        <div className="links-list">{props.children}</div>
      </div>
    );
  }
  function FooterLink(props) {
    return <div className="footer-link">{props.children}</div>;
  }
  function SocialMedia(props) {
    function LogoMedia(props) {
      return <div className="logo-media">{props.logo}</div>;
    }
    return (
      <div className="social-media">
        <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
        <FaInstagram />
      </div>
    );
  }

  return (
    <footer>
      <h1>Shortly</h1>
      <FooterLinks title="Features">
        <FooterLink>Link Shortening</FooterLink>
        <FooterLink>Branded Links</FooterLink>
        <FooterLink>Analytics</FooterLink>
      </FooterLinks>
      <FooterLinks title="Resources">
        <FooterLink>Blog</FooterLink>
        <FooterLink>Developers</FooterLink>
        <FooterLink>Support</FooterLink>
      </FooterLinks>
      <FooterLinks title="Company">
        <FooterLink>About</FooterLink>
        <FooterLink>Our Team</FooterLink>
        <FooterLink>Careers</FooterLink>
        <FooterLink>Contact</FooterLink>
      </FooterLinks>
      <SocialMedia />
    </footer>
  );
}
