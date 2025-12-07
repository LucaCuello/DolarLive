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
    <footer className="flex flex-col items-center gap-2 py-2">
      <div className="text-xs text-muted-foreground">
        <span>
          Developed by <span className="font-semibold text-foreground">Luca</span>
        </span>
      </div>
      <div className="flex gap-3">
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Dejale una estrellita al repo ;)"
          href="https://github.com/LucaCuello/DolarLive"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiGithub className="w-4 h-4" />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Conectemos en LinkedIn :)"
          href="https://www.linkedin.com/in/luca-cuello41/"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiLinkedin className="w-4 h-4" />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Seguime en Twitter!"
          href="https://twitter.com/LucaCuello_"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiTwitter className="w-4 h-4" />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Invitame un cafecito :D"
          href="https://cafecito.app/lucacuello"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiCoffeescript className="w-4 h-4" />
        </a>
        <a
          data-tooltip-id="tooltip"
          data-tooltip-content="Si tenés alguna sugerencia, este es mi mail :)"
          href="mailto:lucagcuello@gmail.com"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiGmail className="w-4 h-4" />
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
