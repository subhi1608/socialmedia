import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { getUsers } from "../../../store/actions/userActions";
import style from "./contacts.module.css";
import Avatar from "../../../utils/avatar";

const MyContacts = () => {
  const response = useSelector((state) => state.allUsers.users);
  const loggedUserId = useSelector((state) => state.profile.user._id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(loggedUserId));
  }, [dispatch]);
  return (
    <div className={style.mainDiv}>
      <h3>Contacts</h3>
      <ul className={style.list}>
        {response.map((user) => {
          const { name, id, pic } = user;
          return (
            <div className={style.listDiv} key={id}>
              <Link to={`/profile/${id}`} style={{ textDecoration: "none" }}>
                <Avatar props={pic} />
              </Link>
                <span>{name}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MyContacts;
