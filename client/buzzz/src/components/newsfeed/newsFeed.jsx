import styles from "./newsfeed.module.css";
import React, { useEffect, useState } from "react";
import Switch from '@material-ui/core/Switch';
import CreatePost from "../add-post/createPost";
import DummyPost from "../add-post/dummyPost";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts,filteredPosts } from "../../store/actions/getAllPosts";
import {getUser} from "../../store/actions/getUserAction"


const NewsFeed = () => {
  const loggedUser = useSelector((store) => store.profile.user);
  const loggedUserId = loggedUser._id;
  let allPosts = useSelector((store) => store.allPosts.posts);
  const [isAdmin, setIsAdmin] = useState(loggedUser.isAdmin);
  const [isClicked,setIsClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts(loggedUserId));
    dispatch(getUser())
  }, [dispatch]);
  const filteredPostHandler =async()=>{
  setIsClicked(!isClicked)
  if(isClicked!==false){
    dispatch(getAllPosts())
  }
  else{
    dispatch(filteredPosts())
  }
  }

  return (
    <div className={styles.feed}>
      <CreatePost />
      
      {isAdmin && (<div className={styles.adminBtnDiv}>
        <span> Moderator</span>
        <span><button onClick={filteredPostHandler} className={styles.adminBtn} ><Switch /></button></span>
      </div>)}
      {!isClicked? (allPosts.map((post) => {
        return <DummyPost data={post} key={post._id} />;
      })):(allPosts.map((post) => {
        return <DummyPost data={post} key={post._id} />;
      }))
      }
     
    </div>
  );
};

export default NewsFeed;
