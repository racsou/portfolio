import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModel, setshowModel] = useState(false);
  return (
    <header className="flex">
      <button className="menu icon-menu flex"
        onClick={() => {
          setshowModel(true);
        }}
      />
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articale</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <a href="about">about</a>
            </li>
            <li>
              <a href="articale">articale</a>
            </li>
            <li>
              <a href="news">news</a>
            </li>
            <li>
              <a href="test">test</a>
            </li>
            <li>
              <a href="test">test</a>
            </li>
          </ul>
        </div>
      )}

      <button className="mode flex">
        <span className="icon-moon-o"></span>
        <span className="icon-sun-os"></span>
      </button>
    </header>
  );
};

export default Header;
