import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="extension-footer">
      <span>
        Developed by <span id="name-highlight">Luca Cuello</span>
      </span>
      <div className="contact-links">
        <a href="https://github.com/LucaCuello" target="_blank">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/luca-cuello41/" target="_blank">
          <SiLinkedin />
        </a>
        <a href="https://twitter.com/LucaCuello_" target="_blank">
          <SiTwitter />
        </a>
      </div>
    </footer>
  );
};
