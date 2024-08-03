import "./Header.css";
import LogoArtjunks from "./Logo-Artjunks.png";
import HamburguerMenu from "./HamburgerMenu.png";
export const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#">
          <img src={LogoArtjunks} alt="" />
        </a>
        <a href="#">
          <img src={HamburguerMenu} alt="" />
        </a>
      </nav>

      <div className="header-info-section">
      <div className="header-ornament"></div>

        <h1 className="header-info-section-title">
          Art pieces made easy accessible for everyone
        </h1>
        <p className="header-info-section-paragraph">
          Learn, buy and trade art pieces of your favorite artist around the
          world by using crypto currencies.
        </p>
        <a className="header-info-section-callToAction" href="#">
          Learn more
        </a>
      </div>
    </header>
  );
};
