import style from "./profile.module.css";
import React from "react";
import HeaderBar from "../components/header/header-bar";
import FriendProfile from "../components/profile/friendprofile";
import Suggestions from "../components/sidebars/rightsidebar/Suggestions";

const Profile = () => {
  return (
    <div className={style.container}>
      <HeaderBar />
      <div className={style.wrapper}>
        <section className={style.profileSection}>
          <FriendProfile />
        </section>
        <section className={style.suggestionSection}>
          <Suggestions/>
        </section>
      </div>
    </div>
  );
};

export default Profile;
