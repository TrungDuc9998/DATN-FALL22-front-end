import Header from "../components/Header";
import SideBar from "./SideBar";
import classNames from "classnames";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);
///layout chính
function DefaultLayout({ children }) {
 
  return (
    <div className={cx('wrapper')}>
        <Header/>
        <div className="">
        <SideBar/>
        <div className={cx('content')}>{children}</div>
    </div>       
    </div>
  )
}

export default DefaultLayout;
