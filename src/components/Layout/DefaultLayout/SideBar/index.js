import classNames from "classnames";
import { useState } from "react";
import styles from "../../../GlobalStyles";
import { Airplay, Menu, Grid, LogOut, Aperture, Home } from 'react-feather';
import { Link, Route, Routes } from "react-router-dom";
const cx =classNames.bind(styles)
function SideBar() {
  const [btnActive, setBtnActive] = useState(true);
  function handelClickBtnMenu() {
      setBtnActive(btnActive => !btnActive);
  }
  let toggleClassCheck = btnActive ? 'active' : '';
    return ( 
        <div className={`sidebar ${toggleClassCheck}`}>
                <div className="logo_content">
                    <div className="logo">
                        <Airplay color="red" size={30} />
                        <div className="logo_name">Logo Name</div>
                    </div>
                    <Menu id="btn" color="white" onClick={handelClickBtnMenu} size={30}></Menu>
                </div>
                <ul className="nav_list">
                    {/* <li className="d-flex">
                        <Link to={'/'}>
                            <Grid className="icons" size={30} />
                            <span className="ms-2 link_name">Trang chủ</span>
                        </Link>
                        <span className="tooltip">Trang chủ</span>
                    </li>
                    <li className="d-flex">
                        <Link to={'/category'}>
                            <Grid className="icons" size={30} />
                            <span className="ms-2 link_name">Quản lý loại sản phẩm</span>
                        </Link>
                        <span className="tooltip">Quản lý loại sản phẩm</span>
                    </li>
                    <li className="d-flex">
                        <Link to={'/'}>
                            <Grid className="icons" size={30} />
                            <span className="ms-2 link_name">Quản lý sản phẩm</span>
                        </Link>
                        <span className="tooltip">Quản lý sản phẩm</span>
                    </li>
                    <li className="d-flex">
                       <ul>
                            <li>
                            <Link to={'/'}>
                            <Grid className="icons" size={30} />
                            <span className="ms-2 link_name">Quản lý sản phẩm</span>
                            </Link>
                            <span className="tooltip">Quản lý sản phẩm</span>
                                </li>
                       </ul>
                    </li> */}
                    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
                </ul>
                
            </div>
     );
}

export default SideBar;