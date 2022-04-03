import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../store/actions/getUserAction";
import styles from "./userprofile.module.css";
import icon from "../../../assets/person.jpg";
import Avatar from "../../../utils/avatar";
const UserProfileCard = () => {
	const response = useSelector((state) => state.profile.user);

	const { username, profilePic } = response;

	return (
		<div className={styles.user}>
			<div className={styles.coverdiv}>
				<img src={icon} alt="" />
			</div>
			<div className={styles.icondiv}>
				<Avatar Image={profilePic} />
			</div>
			<div className={styles.userdetails}>
				<span>{username}</span>
			</div>
		</div>
	);
};

export default UserProfileCard;
