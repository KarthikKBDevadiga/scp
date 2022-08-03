import styles from "./Home.module.css";
import ExpandMoreIcon from "../../icons/ExpandMoreIcon";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";

const notifications = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

const Home = () => {
  const [notificationButtonRef, setNotificationButtonRef] = useState();
  const [openNotification, setOpenNotification] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.navContainer}>
          <div className={styles.nav}>
            <div className={styles.navItem}>Hi Abu!</div>
            <div
              style={{
                flex: "1",
                alignSelf: "center",
                border: "1px solid black",
                borderRadius: "8px",
                display: "flex",
              }}
            >
              <div
                style={{
                  padding: "8px 16px",
                  display: "flex",
                  borderRight: "1px solid black",
                  width: "max-content",
                  gap: "16px",
                }}
              >
                <div style={{ alignSelf: "center" }}>All</div>
                <ExpandMoreIcon />
              </div>

              <input style={{ fontSize: "16px", width: "100%" }} />
            </div>
            {/* <div
              style={{
                alignSelf: "center",
              }}
              ref={(ref) => setNotificationButtonRef(ref)}
              onClick={(event) => {
                setOpenNotification(true);
              }}
              aria-controls="notification-menu"
            >
              <BellIcon />
            </div> */}

            <IconButton
              aria-controls="notification-menu"
              ref={(ref) => setNotificationButtonRef(ref)}
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setOpenNotification(true)}
              sx={{
                height: "max-content",
                alignSelf: "center",
                // marginLeft: "16px",
              }}
            >
              <NotificationsIcon />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setOpenDrawer(true)}
              sx={{
                height: "max-content",
                alignSelf: "center",
                // marginLeft: "16px",
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* <div
              style={{
                alignSelf: "center",
                color: "gray",
              }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </div> */}
          </div>
        </div>
      </div>
      <Menu
        id="notification-menu"
        anchorEl={notificationButtonRef}
        open={openNotification}
        onClose={() => {
          setOpenNotification(false);
        }}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {notifications.map((notification, index) => (
          <MenuItem
            key={notification}
            disabled={index === 0}
            // selected={index === selectedIndex}
            // onClick={(event) => handleMenuItemClick(event, index)}
          >
            {notification}
          </MenuItem>
        ))}
      </Menu>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        PaperProps={{
          sx: { padding: "16px", minWidth: "300px" },
        }}
        maxWidth="sm"
        width="sm"
        onClose={() => setOpenDrawer(false)}
      >
        <div
          style={{
            padding: "16px",
            display: "flex",
            gap: "16px",
          }}
        >
          <NotificationsIcon sx={{ alignSelf: "center" }} />
          <div style={{ alignSelf: "center" }}> Sample Page</div>
        </div>
      </Drawer>
    </>
  );
};
export default Home;
