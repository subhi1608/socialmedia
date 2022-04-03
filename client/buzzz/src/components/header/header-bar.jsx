import "./header-bar.css";
import { Link } from "react-router-dom";
import Avatar from "../../utils/avatar";
import SimpleDialogDemo from "./friendRequestDialog";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import axios from "../../axios";

export default function HeaderBar() {
	const image = useSelector((store) => store.profile.user.profilePic);
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<Link to="/home" style={{ textDecoration: "none" }}>
					<div className="logo"></div>
				</Link>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<SearchIcon />
					<input placeholder="Search for friend" className="searchInput" />
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<SimpleDialogDemo />
					</div>
					<Link to="/myprofile">
						<Avatar Image={image} />
					</Link>
				</div>
			</div>
		</div>
	);
}
