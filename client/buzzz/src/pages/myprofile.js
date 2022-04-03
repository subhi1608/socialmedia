import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderBar from "../components/header/header-bar";
import ProfileDetailForm from "../components/Login/profiledetailform";
import UserProfileCard from "../components/sidebars/leftsidebar/userprofile";
import Suggestions from "../components/sidebars/rightsidebar/Suggestions";
import CoverImage from "../utils/cover";
import DisplayImage from "../utils/displayimage";
import style from "./myprofile.module.css";

const MyProfile = () => {
	const loggedUser = useSelector((state) => state.profile.user);

	const { username, email } = loggedUser;

	return (
		<div className={style.container}>
			<div className={style.header}>
				<HeaderBar />
			</div>
			<div className={style.wrapper}>
				<section className={style.profileSection}>
					<CoverImage Image={loggedUser.coverPic} />
					<div className={style.profileWrapper}>
						<DisplayImage Image={loggedUser.profilePic} />
						<article className={style.userDetails}>
							<h1>{username}</h1>
							<p>{email}</p>
						</article>
					</div>

					<div className={style.userInfo}>
						<ProfileDetailForm data={loggedUser} />
					</div>
				</section>
				<section className={style.suggestionSection}>
					<Suggestions />
				</section>
			</div>
		</div>
	);
};

export default MyProfile;
