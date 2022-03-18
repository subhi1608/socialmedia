import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { suggestedUser } from "../../../store/actions/suggestedFriends";
import Avatar from "../../../utils/avatar";
import style from "./suggestions.module.css";

const Suggestions = () => {
  const loggedUserId = useSelector((state)=>state.profile.user._id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(suggestedUser(loggedUserId));

  }, [loggedUserId]);
  
  const response = useSelector((state) => state.suggested.suggestedUsers);
  return (
    <div className={style.mainDiv}>
      <h3>Suggestions</h3>
      <ul className={style.list}>
        {response.map((user) => {
          const { username, _id, profilePic } = user;
          return (
            <div className={style.listDiv} key={_id}>
                <Link to={`/profile/${_id}`} style={{ textDecoration: "none" }}>
              <Avatar props={profilePic} url={username} />
                </Link>
              <span>{username}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Suggestions;
