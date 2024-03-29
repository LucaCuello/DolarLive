import {
  SiCoffeescript,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { toolTipStyles } from "../../utils/utils";

export const Footer = () => {
  return (
    <footer className="extension-footer">
      <div className="contact-colab-links">
        <span>
          Developed by <span id="name-highlight">Luca</span>
        </span>
      </div>
      <div className="contact-links">
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Dejale una estrellita al repo ;)"
          href="https://github.com/LucaCuello/DolarLive"
          target="_blank"
        >
          <SiGithub />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Conectemos en LinkedIn :)"
          href="https://www.linkedin.com/in/luca-cuello41/"
          target="_blank"
        >
          <SiLinkedin />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Seguime en Twitter!"
          href="https://twitter.com/LucaCuello_"
          target="_blank"
        >
          <SiTwitter />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Invitame un cafecito :D"
          href="https://cafecito.app/lucacuello"
          target="_blank"
        >
          <SiCoffeescript />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Si tenés alguna sugerencia, este es mi mail :)"
          href="mailto:lucagcuello@gmail.com"
          target="_blank"
        >
          <SiGmail />
        </a>
      </div>
      <Tooltip
        id="tooltip"
        opacity={1}
        classNameArrow="tooltip-arrow"
        style={toolTipStyles}
      />
    </footer>
  );
};
