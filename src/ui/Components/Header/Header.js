import "./Header.css";
import PokeballIcon from "../../Assets/Icons/PokeballIcon.svg";


export const Header = () => {
  return (
    <header className="header__container">
      <img src={PokeballIcon} alt="PokeballIcon" className="pokeball__icon" />
      <p className="header__title">My Pokédex</p>
    </header>
  );
};
