import { Link, useLocation } from "@tanstack/react-router";
import styles from "./index.module.css";
import { BsHouseFill, BsRobot, BsPeopleFill } from "react-icons/bs"

const BottomBar = () => {
  const location = useLocation();

  return (
    <div className={styles.bottom_bar}>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <BsHouseFill size={24} />
      </Link>
      <Link to="#" className={location.pathname === "/club" ? "active" : ""}>
        <BsRobot size={24} />
      </Link>
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
        <BsPeopleFill size={24} />
      </Link>
    </div>
  );
};

export default BottomBar;