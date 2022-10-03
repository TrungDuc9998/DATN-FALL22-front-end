import classNames from "classnames";
import style from "./Header.module.scss";

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <nav className="navbar navbar-dark "style={{background: "#11101d",height:"70px"}}>
        <div className="container"> 
          <a className="navbar-brand" href="#">
           
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
