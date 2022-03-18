import { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import HeaderBar from '../components/header/header-bar'
import ProfileDetailForm from '../components/Login/profiledetailform'
import UserProfileCard from '../components/sidebars/leftsidebar/userprofile'
import Suggestions from '../components/sidebars/rightsidebar/Suggestions'
import CoverImage from '../utils/cover'
import DisplayImage from '../utils/displayimage'
import style from "./myprofile.module.css"

const MyProfile = () => {
    const loggedUser = useSelector(state => state.profile.user); 
    // const [userData, setUserData] = useState({name:'',email:''})
    const {username,email}=loggedUser
    // useEffect(() => {
    //     setUserData({name:username,email:email})
    //     console.log(userData,'userdata');
    // }, [username,email])
    return (
        <div className={style.container}>
            <div className={style.header}>
            <HeaderBar />
            </div>
            <div className={style.wrapper}>
                <section className={style.profileSection}>
                    <CoverImage Image={loggedUser.coverPic}/>
                    <DisplayImage Image={loggedUser.profilePic}/>
                    <div className={style.userInfo}>
                    <ProfileDetailForm data={loggedUser}/>
                    <article>
                        <h1>{username}</h1>
                        <p>{email}</p>
                        <h4>{email}</h4>
                    </article>
                    </div>
                </section>
                <section className={style.suggestionSection}>
                    <Suggestions/>
                </section>
            </div>
        </div>
    )
}

export default MyProfile
