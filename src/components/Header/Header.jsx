import "./Header.css";

import { Navbar } from "../Navbar/Navbar";
export const Header = () => {
  return (
    <header className="header">
      <Navbar/>

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
