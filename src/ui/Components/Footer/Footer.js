import "./Footer.css";
import GitHubIcon from "../../Assets/Icons/GitHubIcon.svg";
import PokeApiIcon from "../../Assets/Icons/PokeApiIcon.svg";

export const Footer = () => {
  return (
    <footer className="footer__container">
      <img src={GitHubIcon} alt="GitHubIcon" className="github__icon" />
      <img src={PokeApiIcon} alt="PokeApiIcon" className="pokeapi__icon" />
    </footer>
  );
};
