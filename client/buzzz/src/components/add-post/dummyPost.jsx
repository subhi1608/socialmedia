import React, { useEffect, useRef,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import FlagIcon from '@material-ui/icons/Flag';
import style from "./dummypost.module.css";
import Avatar from "../../utils/avatar";

import { addComment } from "../../store/actions/postComment";
import { likePost,dislikePost,flagPost } from "../../store/actions/like-dislike";


const DummyPost = ({ data }) => {
  const inputRef = useRef();
  const { createdAt, desc, img, userId, _id, likes, comments, dislike,isFlagged } = data;
  const [flagged,setFlagged]=useState(isFlagged)
  const [liked,setLiked] =useState();
  const [disliked,setDisliked] =useState();
  const loggedUser = useSelector((state) => state.profile.user);
  const loggedUserId = loggedUser._id;

  const dispatch = useDispatch();
  // editing time
  const editedDate = new Date(createdAt).toLocaleTimeString();

  const likeHandler = async (loggedUserId) => {
   dispatch(likePost({loggedUserId,_id}))
  };
  const dislikeHandler = async (loggedUserId) => {
  dispatch(dislikePost({loggedUserId,_id}))
  };
  const flagPostHandler = async()=>{
    setFlagged(!flagged)
     dispatch(flagPost(_id))
  }
  const inputHandler = async (e) => {
    e.preventDefault();
    dispatch(
      addComment({ description: inputRef.current.value, _id, loggedUserId })
    );
    inputRef.current.value = "";
  };
  useEffect(() => {
    setLiked(likes.includes(loggedUserId))
    setDisliked(dislike.includes(loggedUserId))
  }, [likes]);
  return (
    <div className={style.dummyPost} key={_id}>
      <div className={style.title}>
        <Avatar Image={userId.profilePic} />
        <section className={style.postTitle}>
          <h4>{userId.username}</h4>
          <h6>Created at {editedDate}</h6>
        </section>
        <span>
          <button className={style.flagButton}
           onClick={() => {
            flagPostHandler();
          }}>
            <FlagIcon htmlColor={flagged?'red':'blue'} />
          </button>
        </span>
      </div>
      <div className={style.desc}>
        <p className={style.postDesc}>{desc} </p>
        {img[0] ? <img src={img[0]} className={style.postImage}></img> : <br />}
      </div>
      <div className={style.desc}>
       
          <span className={style.count}>
            <ThumbUpAltIcon htmlColor="blue"  />
            {likes?.length} likes
          </span>
          <span className={style.count}>
            <ThumbDownAltIcon htmlColor="blue" />
            {dislike?.length} dislikes
          </span>

      </div>
      <hr className={style.socialRuler} />
      <div className={style.postbuttons}>
        <button
          className={style.socialbuttons}
          onClick={() => {
            likeHandler(loggedUserId);
          }}
        >
          <ThumbUpAltIcon htmlColor={liked?'blue':'black'} />
          Like
        </button>
        <button
          className={style.socialbuttons}
          onClick={() => {
            dislikeHandler(loggedUserId);
          }}
        >
          <ThumbDownAltIcon htmlColor={disliked?'blue':'black'} />
          Dislike
        </button>
      </div>
      <hr />
      <div className={style.addComment}>
        <Avatar Image={loggedUser.profilePic} />
        <form action="" onSubmit={inputHandler}>
          <input
            type="text"
            name=""
            id=""
            ref={inputRef}
            className={style.commentText}
            placeholder="add a comment"
          />
          <button type="submit" className={style.addCommentButton}>
            {" "}
            Post
          </button>
        </form>
      </div>
      {/* this loads all comments */}
      {comments.map((item) => {
        const { desc, username, profilePic, _id } = item;
        return (
          <div className={style.showComment} key={_id}>
            <Avatar Image={profilePic} />
            <section className={style.commentDetails}>
              <h5 className={style.commentTitle}>{username}</h5>
              <p className={style.showCommentText}>{desc}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default DummyPost;
