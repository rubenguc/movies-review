import { Link, useLocation } from "@tanstack/react-router";
import { HomeFilled, RobotFilled, UserOutlined } from "@ant-design/icons";
import styles from "./index.module.css";

const BottomBar = () => {
  const location = useLocation();

  return (
    <div className={styles.bottom_bar}>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <HomeFilled size={24} />
      </Link>
      <Link to="/club" className={location.pathname === "/club" ? "active" : ""}>
        <RobotFilled size={24} />
      </Link>
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
        <UserOutlined size={24} />
      </Link>
    </div>
  );
};

export default BottomBar;