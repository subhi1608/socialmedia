import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import { showUser } from '../../store/actions/showUserAction';
import {getUser} from "../../store/actions/getUserAction"
import CoverImage from "../../utils/cover";
import DisplayImage from "../../utils/displayimage";
import style from "./friendprofile.module.css";
import Icon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { addUser } from '../../store/actions/addUser';

const FriendProfile = () => {
  const response = useSelector(state=>state.showProfile.userProfile)
  const loggedUserProfile = useSelector(state=>state.profile.user)
  const loggedUserProfileId = loggedUserProfile._id
  
  const dispatch = useDispatch()
  const { id } = useParams();
  const {email,username} = response
  let friend=false;
  
  const addFriendHandler =async(props)=>{
    
    dispatch(addUser({loggedUserProfileId,id}))
  }
  useEffect(()=>{
    dispatch(showUser(id))
    dispatch(getUser())
  },[id])

    if(response.friends!== undefined){
      friend = response.friends.includes(loggedUserProfileId) 
    }
  return (
    <div className={style.wrapper}>
      <div className={style.profileCover}>
        <CoverImage />
      </div>
      <div className={style.profileImage}>
        <DisplayImage />
      </div>
      <div className={style.profileDetail}>
        <h1>{username}</h1>
        <h4>{email}</h4>
        <p>Working at To The New</p>
      </div>
      <div className={style.addFriendButton}> 
      {!friend &&
      <Button
          variant="contained"
          color="primary"
          endIcon={<Icon></Icon>}
          onClick={()=>{addFriendHandler({loggedUserProfileId,id})}}
        >
          Add Friend
        </Button>
}
      </div>
    </div>
  );
};

export default FriendProfile;
